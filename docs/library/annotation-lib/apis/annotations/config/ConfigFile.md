---
title: ConfigFile
---

import { Annotation } from '@site/src/components/JavaIcons';

# ConfigFile <Annotation/>

Tell the config system to load config. **ONLY LOAD NO SAVE**

**Only provide basic usage. Use Cloth Config for advanced functions.**

Gson will be used so you can use Gson features.
Use `AnnotationApi.getConfig(this class);` to get your config.

```java
@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.TYPE})
public @interface ConfigFile {
    /**
     * The config folder.
     * @return {@link String }
     */
    String path();

    /**
     * The config file without folder path.
     * @return {@link String }
     */
    String file();

    /**
     * Automatically create with default values when config file not found.
     * @return boolean
     */
    boolean autoCreate() default true;
}
```