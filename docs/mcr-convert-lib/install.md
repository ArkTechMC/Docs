---
title: Installation
---

# How to install

This article will tell you how to install this library for both players and developers.

## For players

Download this mod on [CurseForge](https://www.curseforge.com/minecraft/mc-mods/mcrconvertlib) / [Modrinth](https://modrinth.com/mod/mcrconvertlib).

## For developers

You can download the jar with links above, or use our maven repositories below:

```groovy
maven {
   name = "IAFEnvoy's Maven"
   url = "https://maven.iafenvoy.com/releases"
}

dependencies {
    modImplementation "com.iafenvoy:mcrconvertlib:${mcrconvertlib_version}"
}
```

### About versions

**The latest version is always recommended.** If you need a previous version, see recent files on CurseForge / Modrinth / Maven Repos.

You may see a lot of versions in `https://maven.iafenvoy.com/#/releases/com/iafenvoy/mcrconvertlib` which is not available on both CurseForge and Modrinth. This means this version is not stable and has critical bugs. **Do not use them!**