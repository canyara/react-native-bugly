var fs = require("fs");
var glob = require("glob");
var inquirer = require("inquirer");
var path = require("path");
var plist = require("plist");
var xcode = require("xcode");
var _ = require("lodash");
var pbxFile = require("xcode/lib/pbxFile");
var package = require("../../../package.json");

console.log("react-native-bugly postunlink start");

var ignoreNodeModules = { ignore: "node_modules/**" };
var appDelegatePaths = glob.sync("**/AppDelegate.m", ignoreNodeModules);

// Fix for https://github.com/Microsoft/react-native-code-push/issues/477
// Typical location of AppDelegate.m for newer RN versions: $PROJECT_ROOT/ios/<project_name>/AppDelegate.m
// Let's try to find that path by filtering the whole array for any path containing <project_name>
// If we can't find it there, play dumb and pray it is the first path we find.
var appDelegatePath =
  findFileByAppName(appDelegatePaths, package ? package.name : null) ||
  appDelegatePaths[0];
var plistPath = glob.sync(
  path.join(path.dirname(appDelegatePath), "*Info.plist").replace(/\\/g, "/"),
  ignoreNodeModules
)[0];

removeFrameworkAndSearchPath();

// Helper that filters an array with AppDelegate.m paths for a path with the app name inside it
// Should cover nearly all cases
function findFileByAppName(array, appName) {
  if (array.length === 0 || !appName) return null;
  for (var i = 0; i < array.length; i++) {
    var path = array[i];
    if (path && path.indexOf(appName) !== -1) {
      return path;
    }
  }
  return null;
}

function removeFrameworkAndSearchPath() {
  var projectPath = glob.sync("**/project.pbxproj", ignoreNodeModules)[0];
  var project = xcode.project(projectPath);
  var frameworkPath = path.join(
    __dirname,
    "../node_modules/react-native-bugly/ios/RNBugly/Bugly.framework"
  );
  var project_dir = path.join(__dirname);
  var project_relative = path.relative(project_dir, frameworkPath);
  project.parse(function(error) {
    if (error) {
      console.log("xcode project error is", error);
    } else {
      var target = project.getFirstTarget().uuid;
      var file = new pbxFile(project_relative, {
        customFramework: true,
        target: target
      });
      file.target = target;
      project.removeFromPbxBuildFileSection(file); // PBXBuildFile
      project.removeFromPbxFileReferenceSection(file); // PBXFileReference
      project.removeFromFrameworksPbxGroup(file); // PBXGroup
      project.removeFromPbxFrameworksBuildPhase(file); // PBXFrameworksBuildPhase
      //   project.removeFromFrameworkSearchPaths(file);
      removeSearchPaths(
        project,
        '"$(SRCROOT)/../node_modules/react-native-bugly/ios/RNBugly/**"'
      );
      fs.writeFileSync(projectPath, project.writeSync());
    }
  });
}

function removeSearchPaths(project, frameworkSearchPath) {
  const config = project.pbxXCBuildConfigurationSection();
  Object.keys(config)
    .filter(ref => ref.indexOf("_comment") === -1)
    .forEach(ref => {
      const buildSettings = config[ref].buildSettings;
      const shouldVisitBuildSettings =
        buildSettings["PRODUCT_NAME"] === package.name;
      if (shouldVisitBuildSettings) {
        if (buildSettings["FRAMEWORK_SEARCH_PATHS"]) {
          const paths = _.remove(
            buildSettings["FRAMEWORK_SEARCH_PATHS"],
            function(path) {
              return path !== frameworkSearchPath;
            }
          );
          buildSettings["FRAMEWORK_SEARCH_PATHS"] = paths;
        }
      }
    });
}
