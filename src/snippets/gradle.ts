const text: string = `// build.gradle

repositories {
  maven {
    url  "https://jitpack.io"
  }
}

dependencies {
  compile "com.github.Discord4J.Discord4J:Discord4J-core:@VERSION@"
}`

export default {
  text,
  lines: text.split(/\n/).length,
}
