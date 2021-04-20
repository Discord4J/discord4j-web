export interface TextLines {
    text: string
    lines: number
}

class ConfigurationSnippets {
    public version: string = "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"

    /**
     * Gradle build.gradle configuration template
     */
    get gradle(): TextLines {
        return this.textLines(`// build.gradle

dependencies {
    implementation "com.discord4j:discord4j-core:${this.version}"
}
`)
    }

    /**
     * Kotlin Gradle script build.gradle.kts configuration template
     */
    get kotlin(): TextLines {
        return this.textLines(`// build.gradle.kts

dependencies {
    implementation("com.discord4j:discord4j-core:${this.version}")
}
`)
    }

    /*
     * Maven pom.xml configuration template
     */
    get maven(): TextLines {
        return this.textLines(`<!-- pom.xml -->

<dependencies>
  <dependency>
    <groupId>com.discord4j</groupId>
    <artifactId>discord4j-core</artifactId>
    <version>${this.version}</version>
  </dependency>
</dependencies>
`)
    }

    /**
     * SBT configuration template
     */
    get sbt(): TextLines {
        return this.textLines(`// build.sbt

libraryDependencies ++= Seq(
    "com.discord4j" % "discord4j-core" % "${this.version}"
)
`)
    }

    private textLines(text: string): TextLines {
        return {
            text,
            lines: (text.match(/\n/g) || "").length,
        }
    }
}

export default new ConfigurationSnippets()
