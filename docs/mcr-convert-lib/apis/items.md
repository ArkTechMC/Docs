---
title: Items APIs
---

import { Class, Utility } from '@site/src/components/JavaIcons';

# Items APIs

This part provides APIs for easy creation and registration of complex things.

## ArmorMaterialUtil <Utility/>

Fast way to create a `ArmorMaterial`.

Example(s):
```java
ArmorMaterialUtil.of("blue_diamond_armors", new int[]{13, 15, 16, 11}, 70, new int[]{9, 13, 18, 10}, 40, Registries.SOUND_EVENT.get(new Identifier("item.armor.equip_diamond")), 5.0F, 0.3F, ModItems.BLUE_DIAMOND)
```

**IMPORTANT: Although the `equipSound` parameter is marked with `@Nullable` in IDEA, DON'T pass `null` into it since it will cause game crash!**

## ArmorWithTickItem <Class/>

Add `onArmorTick(World world, PlayerEntity entity)` method to armors.

Example(s):
```java
public class YourArmor extends ArmorWithTickItem {
    public YourArmor(Type slot) {
        super(...)
        //super constructor will automatically register it into tick event
    }

    @Override
    public void onArmorTick(World world, PlayerEntity entity) {
        //Execute on every tick if this is equipped.
    }
}
```

## BannerUtil <Utility/>

Fast way to create banner item stack.

Example(s):
```java
public static final ItemStack FROST = BannerUtil.create("translationKey", Items.CYAN_BANNER,
            new Pair<>(BannerPatterns.CROSS, DyeColor.WHITE),
            new Pair<>(BannerPatterns.STRAIGHT_CROSS, DyeColor.WHITE),
            new Pair<>(BannerPatterns.CURLY_BORDER, DyeColor.WHITE),
            new Pair<>(BannerPatterns.FLOWER, DyeColor.LIGHT_BLUE));
```

## FoilItemBase, FoilSwordItemBase <Class/>

Implement `hasGlint()` and always return true.

## ItemBase <Class/>

Provide item constructor with a setting function.

Example(s):
```java
public A() { super(p -> p.maxDamage(800)); }
public B() { super(p -> p); }
public C() { super(p -> p.fireproof().rarity(Rarity.EPIC)); }
//Or new it directly
Item item = new ItemBase(p -> p);
```

## MonsterEntityBase <Class/>

1.Implement `getGroup()` and put value into constructor

2.Auto enable AI

Example(s):
```java
public MyEntity(EntityType<MyEntity> type, World world) {
    super(type, world, EntityGroup.DEFAULT);
    this.experiencePoints = 0;
}
```

## SwordItemBase <Class/>

Add `onSwingHand(ItemStack itemtack, World world, double x, double y, double z)` method to swords.

Example(s):
```java
public class YourSword extends SwordItemBase {
    public YourSword() {
        super(...)
    }

    @Override
    public boolean onSwingHand(ItemStack itemtack, World world, double x, double y, double z) {
        boolean ret_val = super.onSwingHand(itemtack, world, x, y, z);
        //Execute when player swing hand with this sword.
        return ret_val;
    }
}
```

## ToolMaterialUtil <Utility/>

Fast way to create a `ToolMaterial`

Example(s):
```java
ToolMaterialUtil.of(2500, 20.0F, 5.0F, 4, 25, Items.DIAMOND)
```