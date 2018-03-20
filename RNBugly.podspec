
Pod::Spec.new do |s|
  s.name         = "RNBugly"
  s.version      = "1.0.0"
  s.summary      = "RNBugly"
  s.homepage     = "https://github.com/canyara/react-native-bugly"
  s.license      = "MIT"
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author             = { "canyara" => "canyara@gmail.com" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/canyara/react-native-bugly.git", :tag => "master" }
  s.source_files  = "RNBugly/**/*.{h,m}"
  s.requires_arc = true
  s.preserve_paths  = "**/*.js"
  
  s.dependency "Bugly"
  #s.dependency "React"
  #s.dependency "others"

end
