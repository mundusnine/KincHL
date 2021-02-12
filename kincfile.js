const process = require("process");

let project = new Project("KincHL");
project.setDebugDir("Deployment");
project.addFile("src/**");
project.addIncludeDir("src/");
project.addExclude("src/g5/**");
switch(platform){
    case Platform.Linux:
        project.addLib("hl");
        break;
    case Platform.OSX:
        if (process.env["GITHUB_WORKSPACE"]) {
            project.addIncludeDir("/usr/local/include");
            project.addLib("/usr/local/lib/libhl.dylib");
        }else{
            project.addLib("libhl.dylib");
        }
        break;
    case Platform.Windows:
        if (process.env["GITHUB_WORKSPACE"]) {
            project.addLib(process.env["GITHUB_WORKSPACE"] + "/hashlink/x64/Release/libhl");
            project.addIncludeDir(process.env["GITHUB_WORKSPACE"] + "/hashlink/src");
        } else {
            let hlpath = process.env["HASHLINK"] === undefined ? process.env["HASHLINKPATH"] : process.env["HASHLINK"]; 
            project.addLib(hlpath + "/libhl");
            project.addIncludeDir(hlpath + "/include");
        }
        break;
}

resolve(project);
