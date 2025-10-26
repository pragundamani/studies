---
tags:
  - obsidian
---
#obsidian 
[Obsidian Help](https://help.obsidian.md)
# Basic formatting
### Paragraphs
This is a paragraph. Obsidian, inspired by materials such as bone, carbon, copper, diamond, emerald, gold, palladium, ruby, sapphire, silver, steel and titanium, embodies strength and versatility, offering robust knowledge management, just like these enduring elements.

This is another paragraph. Obsidian, inspired by materials such as bone, carbon, copper, diamond, emerald, gold, palladium, ruby, sapphire, silver, steel and titanium, embodies strength and versatility, offering robust knowledge management, just like these enduring elements.

### Headings
```
# # {heading title} 1
## ## {heading title} 2
### ### {heading title} 3
#### #### {heading title} 4
##### ##### {heading title} 5
###### ###### {heading title} 6
```

### Styled text
**BOLD** uses `**` or `__` around text, `**Bold**` and `__Bold__`
*ITALIC* uses `*` or `_` around text,  `*Italic*` and `_Italic_`
~~Strikethrough~~ uses `~~` around text, `~~Strikethrough~~`
==Highlight== uses `==` around text, `==Highlight=` 

### Call Outs

> You can add a quote by using > before text
> \-[Obsidian](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax)

>[!info] You can turn your quote into a "callout" by using a keyword in square brackets eg `[!info]`

>[!note]- using "-" at the end eg `[!note]-` makes it foldable
>Makes this go away
#### Other call outs
>[!tip]- !tip gives title
>and content

>[!todo] finish work

>[!success]- !success
>there's this

>[!question]- There can be a !question
>and an answer

>[!warning]- !warning
>Warns

>[!failure]- !failure
>fails

>[!danger]- !danger
>Another way to warn really

>[!bug]- !bug
>bugs

>[!example]- gives an !example
>use - after square brackets



add images by opening command palette `CTRL+P` or `CMD+P` and type `Add Embed`
![Hacker| 150x100](markus-spiske-666905-unsplash.jpg) Image is there or type `![[image name]]`

### List
You can create an unordered list by adding a `-`, `*`, or `+` before the text.
##### Unordered list
- list item 1
+ list item 2
* list item 3
##### Ordered list
1. list item 1
2. list item 2
3. list item 3
##### Nested list
1. List item 1
	1. Sub 1
+ List item 1
	+ Sub 1
##### Task list
- [ ] task 1
	- [ ] sub task 1
	- [ ] sub task 2 
- [ ] task 2
- [ ] task 3

### Separators
###### Use any of these:
```
***
****
* * *
---
----
- - -
___
____
_ _ _
```

##### To make a separator like this:
---

### Comments
use %% %% to make comments[^3]
```
%% comment %%
```
>[!info] Comments are only visible in editing mode

### Footnotes
 
 simple footnote[^1].
 
 make a foot note by adding ^{number} in square brackets `[^1]`. 

You can also use inline footnotes.^[This is an inline footnote]
 
[^1]: This is the referenced text.
[^2]: Add 2 spaces at the start of each new line./
  This lets you write footnotes that span multiple lines.
[^note]: Named footnotes still appears as numbers, but can make it easier to identify and link references.
[^3]: This is a footnote.
  footnote part added by leaving 2 spaces
[^note]: another note

# Linking and Links
### Note Links
Obsidian supports two main link formats:
- **Wikilink**: `[[Three laws of motion]]`
- **Markdown link**: `[Three laws of motion](Three%20laws%20of%20motion.md)`

>[!tip] Use Wikilinks for ease of use and automatic refactoring when renaming files. Markdown links are better for compatibility outside Obsidian.

### Heading and Subheading Links

#### Within the Same Note
To link to a heading:  
`[[#Heading Name]]`  
Example: `[[#Preview a linked file]]`

#### Linking to a Heading in Another Note
Add a `#` after the note name:  
`[[Note Title#Heading Name]]`  
Example: `[[Obsidian#Links are first-class citizens]]`

#### Linking to Subheadings
Use nested `#`:  
`[[Note#Heading#Subheading]]`  
Example: `[[Help and support#Questions and advice#Report bugs]]`

### Searching for Headers Across the Vault
Use `[[##` to search headers vault-wide:
- `[[##]]` triggers header search mode
- `[[## team]]` finds all headers with "team"

### Changing the names on links
By default, Obsidian will show the link text as it appears. For example:
- `[[Example]]` displays as [Example](https://help.obsidian.md/Example)
- `[[Example#Details]]` displays as [Example > Details](https://help.obsidian.md/Example#Details)
You can change how a link is displayed by customising its link text:

**Wikilink format**:  
Use a vertical bar (`|`) to change the display text.
- `[[Example|Custom name]]` appears as [Custom name](https://help.obsidian.md/Example)
- `[[Example#Details|Section name]]` appears as [Section name](https://help.obsidian.md/Example#Details)

**Markdown format**:  
Use `[Display text](Link URL)` to customise how the link appears.
- `[Custom name](Example.md)` appears as [Custom name](https://help.obsidian.md/Example)
- `[Section name](Example.md#Details)` appears as [Section name](https://help.obsidian.md/Example#Details)

This method is helpful for one-off situations where you want to change how a link looks in a specific context. If you want to set up an alternate link name that you can reuse throughout your vault, consider using an [[Properties, Tags and Aliases#Aliases|alias]] instead.  
>[!note] What's an [[Properties, Tags and Aliases#Aliases|alias]]? 
>It is an alternate name you can assign to a note for ease of use. For example, if you regularly refer to `[[Three laws of motion]]` as `[[The 3 laws]]`, adding "3 laws" as an [[Properties, Tags and Aliases#Aliases|alias]] allows you to type just that-no need to add custom display text each time.

>[!tip]
> Use [[#Changing the names on links]] when you want to customise how a link looks _in a specific place_
> Use [[Properties, Tags and Aliases#Aliases|aliases]] when you want to refer to the same note using _different names_ throughout your vault.

### Advanced Tips
- **Embed headers**: Use `![[Note#Heading]]` to embed specific sections.
- **Use Aliases**: Define in frontmatter for easier linking across notes.
- **Disambiguate titles**: Same-titled notes can be clarified using paths or aliases.
- **Backlink awareness**: Linking improves context discovery and note connectivity.
- **Avoid typos**: Use Obsidian’s autocomplete for links to prevent broken references.


# Advanced Formatting

## Escaping Markdown Syntax
In some cases, you may need to display special characters in Markdown, such as `*`, `_`, or `#`, without triggering their formatting. To display these characters literally, place a backslash (`\`) before them.
## Tables

``` md
First Column | Second Column
-- | --
t1 | t2
t3 | t4
```

| First Column | Second Column |
| ------------ | ------------- |
| t1           | t2            |
| t3           | t4            |

```md
Left-aligned text | Center-aligned text | Right-aligned text
:-- | :--: | --:
Content | Content | Content
```
## Iframes and Embeds 

use for webpages
```html
<iframe src="INSERT YOUR URL HERE" width="" height=""></iframe>
```