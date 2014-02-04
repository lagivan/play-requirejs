import play.Project._

name := "example-multipage-shim"

version := "1.0-SNAPSHOT"

libraryDependencies ++= Seq(javaJdbc, javaEbean)     

playJavaSettings

requireJs += "app/main1.js"

requireJs += "app/main2.js"

requireJsShim += "build.js"
