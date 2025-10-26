# Properties
Properties allow you to organize information about a note. Properties contain structured data such as text, links, dates, checkboxes, and numbers.
## Add properties to a note
There are several ways to add a property to a note:
- Use the **Add file property** 
- Use the **`Cmd/Ctrl+;`** 
- Choose **Add file property** from the **More actions** menu (brought up by the three dots icon or by right-clicking the tab).
- Type `---` at the very beginning of a file.

Once you add a property, a row will appear at the top of the file with two inputs: the property _name_ and the property _value_.

For the name, you can choose anything you like. Obsidian provides several default properties: `tags`, `cssclasses`, and `aliases`.

Once you choose the property name, you can give it a value.

### Property types

In addition to a name and value, properties also have a _type_. A property's type describes the kind of values it can store. To change the type of a property, click the property's icon or use the **Edit file property** command.

Obsidian supports the following property types:
- text
- list
- number
- checkbox
- date
- date and time

Once a property type is assigned to a property, all properties with that name are assumed to have the same property type.

## Advanced uses

### Links

**Text** and **List** type properties can contain URLs and [[00 Obsidian writing#Links]] using the `[[Link]]` syntax.

### Search properties

Properties have their own [search syntax](https://help.obsidian.md/Plugins/Search) that you can use alongside other search terms and operators. [See search syntax for properties](https://help.obsidian.md/Plugins/Search#Search%20properties).

### Templates

You can add properties to [[Templates, Streamlining Notes|templates]]. When you insert a template into the active note, all the properties from the template will be added to the note. Obsidian will also merge any properties that exist in your note with properties in the template.

### Rename properties

You can rename a property by right-clicking it in the [All properties view](https://help.obsidian.md/Plugins/Properties+view).

### Display modes

You can change how properties are displayed in your note by going to **Settings → Editor → Properties in document**. The options are:

- **Visible** (default) — displays properties at the top of the note, if there are any.
- **Hidden** — hides properties, can still be displayed in the sidebar via [Properties view](https://help.obsidian.md/Plugins/Properties+view).
- **Source** — displays properties in plain text YAML format.

### Add a property

|Action|Hotkey|
|---|---|
|Add new property|`Cmd + ;`|

### Navigate between properties

When a property is focused

|Action|Hotkey|
|---|---|
|Focus next property|`Down arrow` or `Tab`|
|Focus previous property|`Up arrow` or `Shift+Tab`|
|Jump to editor|`Alt+Down arrow`|

### Select properties

|Action|Hotkey|
|---|---|
|Extend selection upwards|`Shift+Up arrow`|
|Extend selection downwards|`Shift+Down arrow`|
|Select all|`Cmd+A`|

### Edit properties

|Action|Hotkey|
|---|---|
|Edit property name|`Left arrow`|
|Edit property value|`Right arrow`|
|Focus property|`Escape`|
|Delete property|`Cmd+Backspace`  <br>  <br>if any properties are selected, it will delete the selection instead.|
|Undo|`Cmd+Z`|
|Redo|`Cmd+Shift+Z`|

### Vim (advanced)

|Action|Hotkey|
|---|---|
|Move down|`j`|
|Move up|`k`|
|Focus key|`h`|
|Focus value|`l`|
|Focus value (Cursor at end)|`A`|
|Focus value (Cursor at beginning)|`i`|
|Create new property|`o`|

## Property format

Properties are stored in [YAML](https://yaml.org/) format at the top of the file. YAML is a widely used format that's readable by both humans and machines.

Property names are separated from their values by a colon followed by a space:

```yaml
---
name: value
---
```

While the order of each name-value pair doesn't matter, each name must be unique within a note. For example, you can't have more than one `tags` property.

Values can be text, numbers, true or false, or even collections of values (arrays).  

```yaml
---
title: A New Hope # This is a text property
year: 1977
favorite: true
cast: # This is a list property
  - Mark Hamill
  - Harrison Ford
  - Carrie Fisher
---
```

Internal links in **Text** and **List** type properties must be surrounded with quotes. Obsidian will automatically add these if you manually enter internal links into properties, but be careful to add them when using templating plugins.

```yaml
---
link: "[[Link]]" 
linklist: 
  - "[[Link]]" 
  - "[[Link2]]"
---
```

Number type properties must always be an integer. The integer may contain decimal points, but not operators.  

```yaml
---
year: 1977
pie: 3.14
---
```

Checkbox type properties are either `true` or `false`. An empty property will be treated as `false`. In Live Preview, this will be represented as a checkbox.  

```yaml
---
favorite: true
reply: false
last: # this will default to false
```

**Date** and **Date & time** type properties are stored in the following format:  

```yaml
---
date: 2020-08-21
time: 2020-08-21T10:30:00
---
```


# Tags
Tags are keywords or topics that help you quickly find the notes you want.

## Add a tag to a note

To create a tag, enter a hash symbol (`#`) in the editor, followed by a keyword. For example, `#meeting`.

You can also add tags using the `tags` [Properties](#Properties). Tags in YAML should always be formatted as a list:

```yaml
---
tags:
  - recipe
  - cooking
---
```

## Find notes using tags

To find notes using the [Search](https://help.obsidian.md/Plugins/Search) plugin, use the `tag` [search operator](https://help.obsidian.md/Plugins/Search#Search%20operators) in your search term, for example `tag:#meeting`.

You can also search for tags by clicking on them in your notes.

To find notes using the [Tags view](https://help.obsidian.md/Plugins/Tags+view) plugin, select **Tags: Show tags** in the [Command palette](https://help.obsidian.md/Plugins/Command+palette), and then select the tag you want to search for.

## Nested tags

Nested tags define tag hierarchies that make it easier to find and filter related tags.

Create nested tags by using forward slashes (`/`) in the tag name, for example `#inbox/to-read` and `#inbox/processing`.

Both the [Search](https://help.obsidian.md/Plugins/Search) and [Tags view](https://help.obsidian.md/Plugins/Tags+view) plugins support nested tags.

## Tag format

You can use any of the following characters in your tags:

- Alphabetical letters
- Numbers
- Underscore (`_`)
- Hyphen (`-`)
- Forward slash (`/`) for [Nested tags](https://help.obsidian.md/Editing+and+formatting/Tags#Nested%20tags)

Tags must contain at least one non-numerical character. For example, #1984 isn't a valid tag, but [# y1984](https://publish.obsidian.md/#y1984) is.

Tags are case-insensitive. For example, [#tag](https://publish.obsidian.md/#tag) and [#TAG](https://publish.obsidian.md/#TAG) will be treated as identical.

Note

Tags will display with the casing they are first created with in the [Tags view](https://help.obsidian.md/Plugins/Tags+view).  
For example, creating [#Tag](https://publish.obsidian.md/#Tag) and then [#TAG](https://publish.obsidian.md/#TAG) will display [#Tag](https://publish.obsidian.md/#Tag) for both.

Tags can't contain blank spaces. To separate two or more words, you can instead use the following formats:

- [# camelCase](https://publish.obsidian.md/#camelCase)
- [# PascalCase](https://publish.obsidian.md/#PascalCase)
- [# snake_case](https://publish.obsidian.md/#snake_case)
- [# kebab-case](https://publish.obsidian.md/#kebab-case)

LINKS TO THIS PAGE
# Aliases
If you want to reference a file using different names, consider adding aliases to the note. An alias is an alternative name for a note.

Use aliases for things like acronyms, nicknames, or to refer to a note in a different language.

Add an alias to a note
To add an alias for a note, add aliases property in the note Properties. Aliases should always be formatted as a list in YAML.
![](Aliases%20example.png)
for example the note [Dogs](0%20Help.md/Help%20Files/Dogs.md) can be called by `Doggo`, `Woofer` & `Yapper`
