const text: string = `// build.sbt

libraryDependencies ++= Seq(
  "com.github.Discord4J.Discord4J" % "Discord4J-core" % "@VERSION@"
)

resolvers += "jitpack.io" at "https://jitpack.io"`

export default {
  text,
  lines: text.split(/\n/).length,
}
