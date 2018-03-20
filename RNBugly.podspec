
Pod::Spec.new do |s|
  s.name         = "RNBugly"
  s.version      = "1.0.0"
  s.summary      = "RNBugly"
  s.description  = <<-DESC
                  RNBugly
                   DESC
  s.homepage     = ""
  s.license      = "MIT"
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author             = { "author" => "canyara@gmail.com" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/canyara/react-native-bugly", :tag => "master" }
  s.source_files  = "RNBugly/**/*.{h,m}"
  s.requires_arc = true

  s.dependency "Bugly"
  #s.dependency "React"
  #s.dependency "others"

end
