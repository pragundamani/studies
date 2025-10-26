These are some plugins that I love to use for my workload
Those that have a `*` next to their names are extremely useful
They just [[00 Help#How to make work better/easier/faster|make work better/easier/faster]]  
Try each of the plugins and then click the checkbox after you have tested it 

[Checklist Progress](#Checklist%20Progress) (0/20): 
- [ ] [*How to download a plugin*](#*How%20to%20download%20a%20plugin*) 
- [ ] [* Excalidraw](#*%20Excalidraw)
- [ ] [* Better Word Count](#*%20Better%20Word%20Count)
- [ ] [* Advanced Codeblock](#*%20Advanced%20Codeblock)
- [ ] [* Editing Toolbar](#*%20Editing%20Toolbar)
- [ ] [Copilot obsidian ai](#Copilot%20obsidian%20ai)
- [ ] [* Spaced Repetition](#*%20Spaced%20Repetition)
- [ ] [* Dataview SQL in obsidian](#*%20Dataview%20SQL%20in%20obsidian)
- [ ] [* Advanced Tables](#*%20Advanced%20Tables)
- [ ] [* Remote Save](#*%20Remote%20Save)
- [ ] [* Waypoints](#*%20Waypoints)
- [ ] [* Callout Manager](#*%20Callout%20Manager)
- [ ] [* Tasks](#*%20Tasks)
- [ ] [Advanced Slides](#Advanced%20Slides)
- [ ] [* Create Table of Contents](#*%20Create%20Table%20of%20Contents)
- [ ] [Kanban](#Kanban)
- [ ] [Quick LaTex](#Quick%20LaTex)
- [ ] [Image Toolkit](#Image%20Toolkit)
- [ ] [Checklist Progress](#Checklist%20Progress)
- [ ] [Chat View](#Chat%20View)

>[!info]- Here is a list of other plugins that I use but may not be as  useful for you:
>1. Day planner
>		![Pasted image 20240723102056|400](Day%20planner.png)
>1. Calendar
>		![Pasted image 20240723102344|400](Calendar.png)
>1. Hider
>		It is used to hide UI elements
>2. Tab Switcher
>	![tab switcher|400](tab%20switcher.gif)
>5. Timer
>		![Pasted%20image%2020240723102843|400](Timer.png)
# *How to download a plugin*
Go to `Settings>Community Plugins`
>[!note] if you see this click on turn on community plugins ![](Turn%20on%20community%20plugins.png)

After that click on `Browse`
![](plugins%20page.png)
Then Search for the plugin you want

# * Excalidraw
[[0 Help/Excalidraw example.excalidraw|Example Excalidraw]] 
Use these different tools to make diagrams and add images, I suggest use PNGs for commonly used images such as benzene rings for chem or maybe the structure of the brain etc.

# * Better Word Count
a word count tool that acts in your status bar, using this with the right settings you can see the word counts of your individual essays in headings, the total word count of your page and the best part is its all in the status bar right in front of you
![[word count.png]]
![[heading word count.png]]
it can also display the word count next to headings
My preferred settings:![[Better Word Count Settings.png]]
# * Advanced Codeblock
Enhances the markdown code block in preview mode. Add title, line number, highlight to code blocks, you can click on the title to collapse or expand the block.
![[Better Codeblock 1.png]]
![[Better Codeblock 2.png]]

# * Editing Toolbar
A lot of the people using this I assume are switching over from word and google docs where you can change styles with a toolbar
I suggest using editing toolbar by chetachi
![[Editing Toolbar.png]]
this creates a bar that holds some of the formatting matter that can be used in obsidian, using this you can visually select and add the markdown for many actions 
# Copilot obsidian ai
first set google gemini or chatgpt as your model:
![[copilot models.png]]

Just add the API key and see the magic happen

![[copilot setup.png]]

use ```CTRL+P``` type `copilot` and see all available commands

![[copilot commands 1.png]]
![[copilot commands 2.png]]
- needless to say a lot of really useful things to do
# * Spaced Repetition
Imagine being able to add flashcards every time you write a definition in one of your notes. These flashcards can then later be marked for review or can be removed. 
### How to use
##### Single line flashcards
> for regular flashcards use `::` 
> for example: `hello::world` will have the question as hello and the answer as world

>for reversible flashcards use `:::`
>for example: `blue:::colour` will have 2 flashcards one showing `blue`  and one showing  `colour`
#### Multiline
> for regular flashcards use `?` 
> for example: 
> ```
hello
?
world
>```
>will give question as hello and the answer as world

> for reversible flashcards use `??` 
> for example: 
> ```
blue
??
colour
>```
>will have 2 flashcards one showing `blue`  and one showing  `colour`
#### Using [[Properties, Tags and Aliases#Tags|Obsidian Tags]]

1. Specify flashcard tags in settings (`#flashcards` is the default).
2. Tag any notes that you'd like to put flashcards using said tags.
# * Dataview SQL in obsidian
Dataview adds a more dynamic feeling to your vault by giving you the ability to query and search in your vault for things such as tasks of filetypes, it could also be in turn used for an index page but I personally find more useful for task lists  

There are 4 ways to render your queries in dataview
- Table
- List
- Task
- Calendar
![[dataview view options.png|400]]

An amazing tool for anyone who's a little to lazy to read all this like me [Basic Dataview Query Builder](https://s-blu.github.io/basic-dataview-query-builder/)

````
list: Lists all pages in your vault as a bullet point:
```dataview 
LIST 
``` 

task: Lists all tasks (completed or not) in your vault: 
```dataview 
TASK 
``` 

calendar: Renders a Calendar view where each page is represented as a dot on its creation date:
```dataview
CALENDAR file.cday 
``` 

Shows a table with all pages of your vault, their field value of due, the files' tags and an average of the values of multi-value field working-hours:
```dataview 
TABLE due, file.tags AS "tags", average(working-hours) 
```
````

#### Source Limiters 
Typically you don’t want to view _all_ of the notes in your vault with a given Dataview query. You’ll want to _limit the scope_ of your query using a _source_.

##### Limiting to folders

Including a source tells Dataview where to look for the data you’re trying to pull. The simplest source is a folder, and you can limit your search to a folder using this syntax:

````plain
```dataview
LIST
FROM "A Folder"
```
````

Notice the quotes: the quotes tell Dataview to look for a file or folder. You can also limit it to individual files or subfolders using standard file syntax. E.g. `FROM "A Folder/Subfolder"` or `FROM "A Folder/Subfolder/File.md"`

##### Limiting to tags

Another way to limit your results is to pull based on tags. In Obsidian, you can add a tag to any file by using a hashtag, e.g. `#tag`. Then you can pull any files that include that tag with Dataview:

````plain
```dataview
LIST
FROM #tag
```
````

Tag searches are also useful with _nested tags_. I find it very useful to use nested tags for project statuses, and then I can pull _all projects_ using the `#project` tag, or I can scope it to a particular status such as `#project/soon` or `#project/active`.  
#### Combining sources

Folders and tags are the two primary ways we _source_ data with Dataview. But you can also _combine_ the two sources to make more complex queries. You can do this by using the `AND` and `OR` operators. You can also use parenthesis to specify the logical order of these statements (it’s like highschool math: anything in parenthesis goes first):

````plain
```dataview
LIST
FROM "Projects" AND (#project/active OR #project/soon) 
```
````

#### Different types of data in Dataview

Next we need to talk about the different types of data in Dataview.

What Dataview includes is a bunch of _built-in & user-defined metadata_ for each of your notes, allowing you to pull your notes quickly based on any number of different factors. Additionally, you can add your _own_ metadata to notes if you require it. Let’s go over those two types of data.

##### Built-in data
|Field Name|Description|
|---|---|
|`file.name`|The file name as seen in Obsidians sidebar.|
|`file.folder`|The path of the folder this file belongs to.|
|`file.path`|The full file path, including the files name.|
|`file.ext`|The extension of the file type; generally `md`.|
|`file.link`|A link to the file.|
|`file.size`|The size (in bytes) of the file.|
|`file.ctime` with Time|The date that the file was created.|
|`file.cday`|The date that the file was created.|
|`file.mtime` with Time|The date that the file was last modified.|
|`file.mday`|The date that the file was last modified.|
|`file.tags`|A list of all unique tags in the note. Subtags are broken down by each level, so `#Tag/1/A` will be stored in the list as `[#Tag, #Tag/1, #Tag/1/A]`.|
|`file.etags`|A list of all explicit tags in the note; unlike `file.tags`, does not break subtags down, i.e. `[#Tag/1/A]`|
|`file.inlinks`|A list of all incoming links to this file, meaning all files that contain a link to this file.|
|`file.outlinks`|A list of all outgoing links from this file, meaning all links the file contains.|
|`file.aliases`|A list of all aliases for the note as defined via the [YAML frontmatter](https://help.obsidian.md/How+to/Add+aliases+to+note).|
|`file.tasks`|A list of all tasks (I.e., `\|[ ] some task`) in this file.|
|`file.lists`|A list of all list elements in the file (including tasks); these elements are effectively tasks and can be rendered in task views.|
|`file.frontmatter`|Contains the raw values of all frontmatter in form of `key \|value` text values; mainly useful for checking raw frontmatter values or for dynamically listing frontmatter keys.|
|`file.day`|Only available if the file has a date inside its file name (of form `yyyy-mm-dd` or `yyyymmdd`), or has a `Date` field/inline field.|
|`file.starred`|if this file has been starred via the Obsidian Core Plugin “Starred Files”.|
##### User-Defined
In addition to the data above, you can also add your own custom data to any note. You can use this for anything you could imagine. To add custom data, you can add [[Properties, Tags and Aliases#Properties|properties]].

Properties can be queried with Dataview, like this:
````plain
```dataview
LIST
WHERE status = "Idea"
```
````
#### Data commands
The different commands that dataview queries can be made up of. Commands are executed in order, and you can have duplicate commands (so multiple `WHERE` blocks or multiple `GROUP BY` blocks, for example).
###### FROM
The `FROM` statement determines what pages will initially be collected and passed onto the other commands for further filtering. You can select from any [[#Source Limiters]], which currently means by folder, by tag, or by incoming/outgoing links.
- **Tags**: To select from a tag (and all its subtags), use `FROM #tag`.
- **Folders**: To select from a folder (and all its subfolders), use `FROM "folder"`.
- **Single Files**: To select from a single file, use `FROM "path/to/file"`.
- **Links**: You can either select links TO a file, or all links FROM a file.
- To obtain all pages which link TO `[[note]]`, use `FROM [[note]]`.
- To obtain all pages which link FROM `[[note]]` (i.e., all the links in that file), use `FROM outgoing([[note]])`.

You can compose these filters in order to get more advanced sources using `and` and `or`.

- For example, `#tag and "folder"` will return all pages in `folder` and with `#tag`.
- `[[Food]] or [[Exercise]]` will give any pages which link to `[[Food]]` OR `[[Exercise]]`.

You can also "negate" sources to obtain anything that does NOT match a source using `-`:

- `-#tag` will exclude files which have the given tag.
- `#tag and -"folder"` will only include files tagged `#tag` which are NOT in `"folder"`.

###### WHERE

Filter pages on fields. Only pages where the clause evaluates to `true` will be yielded.

`WHERE <clause>`

1. Obtain all files which were modified in the last 24 hours:
    
    `LIST WHERE file.mtime >= date(today) - dur(1 day)`
    
2. Find all projects which are not marked complete and are more than a month old:
    
    `LIST FROM #projects WHERE !completed AND file.ctime <= date(today) - dur(1 month)`
    

###### SORT

Sorts all results by one or more fields.

`SORT date [ASCENDING/DESCENDING/ASC/DESC]`

You can also give multiple fields to sort by. Sorting will be done based on the first field. Then, if a tie occurs, the second field will be used to sort the tied fields. If there is still a tie, the third sort will resolve it, and so on.

`SORT field1 [ASCENDING/DESCENDING/ASC/DESC], ..., fieldN [ASC/DESC]`

###### GROUP BY

Group all results on a field. Yields one row per unique field value, which has 2 properties: one corresponding to the field being grouped on, and a `rows` array field which contains all of the pages that matched.

`GROUP BY field GROUP BY (computed_field) AS name`

In order to make working with the `rows` array easier, Dataview supports field "swizzling". If you want the field `test` from every object in the `rows` array, then `rows.test` will automatically fetch the `test` field from every object in `rows`, yielding a new array. You can then apply aggregation operators like `sum()` or `flat()` over the resulting array.

###### FLATTEN

Flatten an array in every row, yielding one result row per entry in the array.

`FLATTEN field FLATTEN (computed_field) AS name`

For example, flatten the `authors` field in each literature note to give one row per author:

Query

`TABLE authors FROM #LiteratureNote FLATTEN authors`

Output

|File|authors|
|---|---|
|stegEnvironmentalPsychologyIntroduction2018 SN|Steg, L.|
|stegEnvironmentalPsychologyIntroduction2018 SN|Van den Berg, A. E.|
|stegEnvironmentalPsychologyIntroduction2018 SN|De Groot, J. I. M.|
|Soap Dragons SN|Robert Lamb|
|Soap Dragons SN|Joe McCormick|
|smithPainAssaultSelf2007 SN|Jonathan A. Smith|
|smithPainAssaultSelf2007 SN|Mike Osborn|

A good use of this would be when there is a deeply nested list that you want to use more easily. For example, `file.lists` or `file.tasks`. Note the simpler query though the end results are slightly different (grouped vs non-grouped). You can use a `GROUP BY file.link` to achieve identical results but would need to use `rows.T.text` as described earlier.

`table T.text as "Task Text" from "Scratchpad" flatten file.tasks as T where T.text`

`table filter(file.tasks.text, (t) => t) as "Task Text" from "Scratchpad" where file.tasks.text`

`FLATTEN` makes it easier to operate on nested lists since you can then use simpler where conditions on them as opposed to using functions like `map()` or `filter()`.

###### LIMIT

Restrict the results to at most N values.

`LIMIT 5`

Commands are processed in the order they are written, so the following sorts the results _after_ they have already been limited:

`LIMIT 5 SORT date ASCENDING`
#### Sorting results
Sometimes you may want your results to show in a different order than the default. If that is the case, then you’ll need the SORT keyword. You can sort based on any field, and you can choose either DESC or ASC.
````plain
```dataview
LIST
FROM #tag
SORT file.name ASC
```
````
#### Limiting results
You can also _limit_ any query if it’s returning too many results. This is particularly handy for big queries, and can help speed up a slow document. And the syntax is simple, you can use any whole number here:
````plain
```dataview
LIST
FROM #tag
LIMIT 10
```
````
#### Grouping Results
Lists the 10 oldest and incompleted tasks of your vault as an interactive task list, grouped by their containing file and sorted from oldest to newest file. 
````
```dataview 
TASK 
WHERE !completed 
SORT created ASC 
LIMIT 10 
GROUP BY file.link 
SORT rows.file.ctime ASC 
```
````
This creates a grouping like you can see below:            
```dataview 
TASK 
WHERE !completed 
SORT created ASC 
LIMIT 10 
GROUP BY file.link 
SORT rows.file.ctime ASC 
```
#### Flatten
**FLATTEN**: Splits up one result into multiple results based on a field or calculation.
````
```dataview 
LIST rows.c 
WHERE typeof(contacts) = "array" AND contains(contacts, [[Mr. L]]) 
SORT length(contacts)
FLATTEN contacts as c
SORT link(c).age ASC 
```
````

````
```dataview 
TABLE L.text AS "My lists" FROM "dailys" 
FLATTEN file.lists AS L 
WHERE contains(L.author, "Surname") 
```
````
## Examples 
###### List files created in the last week:
````plain
```dataview
TABLE file.ctime AS "Created"
WHERE file.ctime >= date(today) - dur(1 week)
```
````
###### List tagged notes in order of last edits
Replace `#tag` with your own tag, and this will show you all the notes with `#tag` in order of most recent edits:
````plain
```dataview
LIST FROM #tag
SORT file.mtime DESC
```
````
###### * Creates a table of files that are incomplete and when they where last modified, it shows the files location as loc:
````
```dataview
table file.mtime as "Modified", status as "Status", file.folder as "Loc"
from ""
where status = "incomplete" or status = "progress"
sort status asc, file.name asc
```
````


# * Advanced Tables
It adds some additional functionality to obsidian's tables by working from the sidebar 
![](Advanced%20tables.png)
For more information  click [here](https://github.com/tgrosinger/md-advanced-tables/blob/main/docs/formulas.md)

# * Remote Save
This is an amazing tool to sync your notes across multiple devices, it syncs it all through many possible services
here is the documentation: [this link](https://github.com/remotely-save/remotely-save?tab=readme-ov-file#remotely-save) 
# * Waypoints 
`%%``Waypoint``%%`
- This trigger flag can be changed in settings, but it will always require the double-percents in notes as that is how Obsidian knows it's a comment and not real text.
- And that's it! Waypoints will be automatically updated whenever the files or folders within that folder are changed. Be sure not to remove the `%% Begin Waypoint %%` or `%% End Waypoint %%` flags as this is what the plugin uses to locate the table of contents. Any changes made to the text between these flags will get removed once the waypoint is updated.
![[Waypoints example.png|350]]
# * Callout Manager
- **Browse a list of available callouts.**  
    Learn about all the callouts that you can use!
- **Change the colors and icon of callouts.**  
    Make callouts your own by changing their colors and icons.
- **Create custom callouts.**  
    No callout to suit your needs? Make it yourself!
- **Automatically detects callouts created by snippets and themes.**  
    Callout Manager keeps track of callouts for you.
![[Callout creator.png|650]]

# * Tasks
## Getting Started
### Finding tasks in your vault
Tasks tracks your checklist items from your vault. The simplest way to create a new task is to create a new checklist item. The markdown syntax for checklist items is a list item that starts with spaced brackets:

```text
- [ ] take out the trash
```

Now Tasks tracks that you need to take out the trash!

>[!Info] 
You can write tasks using any of the following list styles:
> ```text
>- [ ] task starting with a hyphen
>
>* [ ] task starting with an asterisk
>
>+ [ ] task starting with a plus sign
>
>1. [ ] a task in a numbered list
>```


Released

Support for tasks with `+` was introduced in Tasks 4.5.0.

To list all open tasks in a markdown file, simply add a [query](https://publish.obsidian.md/tasks/Queries/About+Queries) as a tasks code block like so:

```markdown
    ```tasks
    not done
    ```

## Adding data to your tasks (optionally)

Now you have a list of all open tasks! This is enough to get started with tasks. You can _optionally_ start using one or more of the other features that Tasks offers. Like, for example, [priorities](https://publish.obsidian.md/tasks/Getting+Started/Priority) or [dates](https://publish.obsidian.md/tasks/Getting+Started/Dates#Start%20date).

This Tasks User Guide almost entirely uses Emoji to add data to your tasks.

However, if you prefer to use text instead of Emoji, see [About Task Formats](https://publish.obsidian.md/tasks/Reference/Task+Formats/About+Task+Formats) for other options.

## Easy editing of tasks

A more convenient way to create a task is by using the `Tasks: Create or edit` command from the command palette. You can also bind a hotkey to the command. The command will parse what's on the current line in your editor and pre-populate a modal. In the modal, you can change the task's description, its due date, and a recurrence rule to have a repeating task.

You can find out more in [‘Create or edit Task’ Modal](https://publish.obsidian.md/tasks/Editing/Create+or+edit+Task).

See other pages in 'Getting Started' for more details on due dates and recurrence, and many other features.

You cannot toggle a task (un)done in the modal. For that, do one of the following.

## Completing tasks

There are two ways to mark a task done:

1. In preview mode, click the checkbox at the beginning of the task to toggle the status between "todo" and "done".
2. In edit mode, use the command `Tasks: Toggle Done`.
    - The command will only be available if the cursor is on a line with a checklist item.
    - You can map the command to a hotkey in order to quickly toggle statuses in the editor view (I recommend to replace the original "Toggle checklist status" with it).
    - If the checklist item is not a task (e.g. due to a global filter), the command will toggle it like a regular checklist item.

A "done" task will have the date it was done appended to the end of its line. For example: `✅ 2021-04-09` means the task was done on the 9th of April, 2021.

## Limitations and warnings

### Restart after updating Tasks plugin

>[!Warning] Whenever Tasks behaves in an unexpected way, **please try restarting Obsidian**.

### Multi-line checklist items

>[!Warning] Tasks only supports **single-line checklist items**.

The task list rendered through this plugin **and** the checklist items from which the task list is built render only the first line of the item. Text after the first line in a multi-line checklist item is ignored (but is unaffected in the stored `.md` file).

This works:

```markdown
-   [ ] This is a task
    -   This is a sub-item
    -   Another sub-item
    -   [ ] And a sub task
        -   Even more details
```

The following _does not work:_

```markdown
-   [ ] This task starts on this line
        and then its description continues on the next line
```

We are tracking this in [issue #2061](https://github.com/obsidian-tasks-group/obsidian-tasks/issues/2061).

### Tasks in Numbered lists

Tasks can read tasks that are in **numbered lists**.

Reading tasks inside numbered lists was introduced in Tasks 1.20.0.

For example:

```markdown
1. [ ] Do first step
2. [ ] Do next step
3. [ ] Do following step
```

Editing and toggling tasks in numbered lists works fine: the original number is preserved.

>[!Warning] However, when these tasks are displayed in tasks blocks they are displayed as ordinary bullet list items.

This is because they will usually be displayed in a completely different order than in the original list, often mixed in with tasks from bullet lists. The original numbers in this case just don't make sense.

### Tasks in Blockquotes and Callouts

Warning: Obsidian bug in versions 1.6.0 to 1.6.3 has caused some tasks not to be found

See [Missing tasks in callouts with some Obsidian 1.6.x versions](https://publish.obsidian.md/tasks/Support+and+Help/Missing+tasks+in+callouts+with+some+Obsidian+1.6.x+versions) for how to ==make Obsidian 1.6.5 fix its metadata cache==, in case it was broken by earlier 1.6.x versions.

Tasks can read tasks that are inside [blockquotes](https://www.markdownguide.org/basic-syntax/#blockquotes-1) or [Obsidian's built-in callouts](https://help.obsidian.md/How+to/Use+callouts).

>[!Warning] However, under the following very specific circumstance, Tasks cannot add or remove completion dates or make the next copy of a recurring task:
>
>- Obsidian is in **Live Preview** editor mode (pencil icon in lower right corner),
>- AND the task's markdown is in a **callout**,
>- AND the user **clicked on the task's checkbox** to complete or re-open the task.

If you toggle a task's status in this situation, you will see a warning. Use the command `Tasks: Toggle Done`, or switch to Reading View (book icon in lower right corner) to click the checkbox.

Completing a task by clicking its checkbox from a `tasks` query block _will_ work in any editor mode, even if the query is inside a callout.

We are tracking this in [issue #1768](https://github.com/obsidian-tasks-group/obsidian-tasks/issues/1768).

>[!Warning] When tasks are in callouts, any preceding heading in the callout is not read by Tasks, so `group by heading` uses the previous heading outside the callout - or `(No Heading)` if none.

### Tasks in Code Blocks
>[!Warning] Tasks cannot read tasks that are **inside code blocks**, such as the ones used by the **Admonitions plugin**. Use Obsidian's built-in callouts instead.

### Tasks in Comments

Obsidian supports two styles of **comments**:

- `<!-- I am text in a comment -->`
- `%% I am text in a comment %%`

>[!Warning] By design, Tasks does **not** read any tasks that are inside these comments, because Obsidian does not read them.

### Tasks with Footnotes

>[!Warning] Tasks can only render **inline footnotes**. Regular footnotes are not supported.

```markdown
-   [ ] This is a task^[with a working inline footnote]
-   [ ] This footnote _will not work_[^notworking]
```

See also [About Queries > Footnotes are not displayed in query results](https://publish.obsidian.md/tasks/Queries/About+Queries#Footnotes%20are%20not%20displayed%20in%20query%20results).

### Tasks with Blockquotes
>[!Warning] Tasks' support for **blockquotes inside tasks** is limited. It renders correctly, but since Tasks only supports a single line, the meta-data of the task will be inside the blockquote.

### Rendering tasks in 'loose' lists
>[!Warning] Tasks won't render **spaces around list items** if you have a list with empty lines (typically known as ['loose' lists](https://spec.commonmark.org/0.30/#loose)).

```markdown
-   [ ] First task before the empty line

-   [ ] Another task. The empty line above will _not_ result in the tasks being more spaced out.
```

### Order of metadata/emojis
>[!Warning] Tasks reads task lines **backwards from the end of the line**, looking for metadata emojis with values, tags and block links. As soon as it finds a value that it does not recognise, it stops reading.
This means that you can only put **block links** (`^link-name`) and **tags** after metadata such as dates, priorities, recurrence rules. Anything else will break the parsing of dates, priorities and recurrence rules.

```markdown
-   [ ] Task with priority placed before tag _priority will be recognized_ 🔼 #tag
-   [ ] Task with date placed before tag _date will be recognized_ 📅 2021-04-09 #tag
-   [ ] Task with date placed before other text _date will be not recognized_ 📅 2021-04-09 other text
-   [ ] Task with block link _works_ 📅 2021-04-09 ^e5bebf
```


If you are concerned that some values in a task are not being parsed as you intended, perhaps because a task is not being found by Tasks searches, you can:

- view an individual task in the [‘Create or edit Task’ Modal](https://publish.obsidian.md/tasks/Editing/Create+or+edit+Task)
- search for all possible problems: see 

If there are any **Tasks emojis visible in the Description field**, close the modal and delete or move to the left any unrecognised text.

![[Tasks Plugin 1.png]]

  
The `Tasks: Create or edit` modal showing a due date that was not parsed, due to trailing `other text`.

### Supported file names

>[!Warning] Tasks only supports checklist items in markdown files with the file extension `.md`.

# Advanced Slides
This is used to create slideshows in obsidian:
https://mszturc.github.io/obsidian-advanced-slides/basic-syntax/

Since this tool is very detailed I will not be covering it, but I do suggest using it if you would like to show your notes as slides (this does make it significantly better looking) 
# * Create Table of Contents
One of my favourite plugins to make an index
	just open the command palate with  `CTRL + P`
	then just enter table![](Table%20of%20Contents%20command.png)
	Click on `Table of Contents: Create table of contents`

# Kanban
### Create a Kanban board
To create a new Kanban board, you can:
Right-click on a folder and select `New Kanban board`.
![](Create%20Kanban.png)
Execute the command palette command, `Kanban: Create new board`, which will create a board at the root of your vault.
![](Kanban%20command.png)
Or convert an empty file into a Kanban board with the command palette command, `Kanban: Convert empty note to Kanban`.

![](Kanban%20empty%20note%20to%20kanban.png)

### Archive
Currently, a Kanban's archive can only be viewed by viewing the board as markdown.

![](Kanban%20Open%20as%20archive.png)
At the bottom, you will see the board's archive (if it has one).

![](Kanban%20Archive.png)
To return to Kanban view, press `Ctrl + p`, search for "Kanban: Toggle between Kanban and markdown mode" and run it with `Enter`.

# LaTex Suite
It allows you to write math faster and do physics, chem and most importantly math
Here is the sample code that I use for math/phy/chem
###### Snippet
```snippet
[
    // Math mode
	{trigger: "mk", replacement: "$$0$", options: "tA"},
	{trigger: "dm", replacement: "$$\n$0\n$$", options: "tAw"},
	{trigger: "beg", replacement: "\\begin{$0}\n$1\n\\end{$0}", options: "mA"},

    // Dashes
	// {trigger: "--", replacement: "–", options: "tA"},
	// {trigger: "–-", replacement: "—", options: "tA"},
	// {trigger: "—-", replacement: "---", options: "tA"},

    // Greek letters
	{trigger: "@a", replacement: "\\alpha", options: "mA"},
	{trigger: "@b", replacement: "\\beta", options: "mA"},
	{trigger: "@g", replacement: "\\gamma", options: "mA"},
	{trigger: "@G", replacement: "\\Gamma", options: "mA"},
	{trigger: "@d", replacement: "\\delta", options: "mA"},
	{trigger: "@D", replacement: "\\Delta", options: "mA"},
	{trigger: "@e", replacement: "\\epsilon", options: "mA"},
	{trigger: ":e", replacement: "\\varepsilon", options: "mA"},
	{trigger: "@z", replacement: "\\zeta", options: "mA"},
	{trigger: "@t", replacement: "\\theta", options: "mA"},
	{trigger: "@T", replacement: "\\Theta", options: "mA"},
	{trigger: ":t", replacement: "\\vartheta", options: "mA"},
	{trigger: "@i", replacement: "\\iota", options: "mA"},
	{trigger: "@k", replacement: "\\kappa", options: "mA"},
	{trigger: "@l", replacement: "\\lambda", options: "mA"},
	{trigger: "@L", replacement: "\\Lambda", options: "mA"},
	{trigger: "@s", replacement: "\\sigma", options: "mA"},
	{trigger: "@S", replacement: "\\Sigma", options: "mA"},
	{trigger: "@u", replacement: "\\upsilon", options: "mA"},
	{trigger: "@U", replacement: "\\Upsilon", options: "mA"},
	{trigger: "@o", replacement: "\\omega", options: "mA"},
	{trigger: "@O", replacement: "\\Omega", options: "mA"},
	{trigger: "ome", replacement: "\\omega", options: "mA"},
	{trigger: "Ome", replacement: "\\Omega", options: "mA"},
    {trigger: "ench", replacement: "\\Delta H^{\\ominus}_{$0}", options: "mA"},
    {trigger: "from", replacement: "\\leftarrow", options: "mA"},
    {trigger: "to", replacement: "\\rightarrow", options: "mA"},

    // Text environment
    {trigger: "text", replacement: "\\text{$0}$1", options: "mA"},
    {trigger: "tt", replacement: "\\text{$0}$1", options: "mA"},
    {trigger: "\"", replacement: "\\text{$0}$1", options: "mA"},

    // Basic operations
    {trigger: "sr", replacement: "^{2}", options: "mA"},
	{trigger: "cb", replacement: "^{3}", options: "mA"},
	{trigger: "rd", replacement: "^{$0}$1", options: "mA"},
	{trigger: "_", replacement: "_{$0}$1", options: "mA"},
	{trigger: "sts", replacement: "_\\text{$0}", options: "mA"},
	{trigger: "sq", replacement: "\\sqrt{ $0 }$1", options: "mA"},
	{trigger: "//", replacement: "\\frac{$0}{$1}$2", options: "mA"},
	{trigger: "ee", replacement: "e^{ $0 }$1", options: "mA"},
    {trigger: "invs", replacement: "^{-1}", options: "mA"},
    {trigger: /([A-Za-z])(\d)/, replacement: "[[0]]_{[[1]]}", options: "rmA", description: "Auto letter subscript", priority: -1},

    {trigger: /([^\\])(exp|log|ln)/, replacement: "[[0]]\\[[1]]", options: "rmA"},
    {trigger: "conj", replacement: "^{*}", options: "mA"},
    {trigger: "Re", replacement: "\\mathrm{Re}", options: "mA"},
	{trigger: "Im", replacement: "\\mathrm{Im}", options: "mA"},
    {trigger: "bf", replacement: "\\mathbf{$0}", options: "mA"},
	{trigger: "rm", replacement: "\\mathrm{$0}$1", options: "mA"},

    // Linear algebra
    {trigger: /([^\\])(det)/, replacement: "[[0]]\\[[1]]", options: "rmA"},
    {trigger: "trace", replacement: "\\mathrm{Tr}", options: "mA"},

    // More operations
	{trigger: "([a-zA-Z])hat", replacement: "\\hat{[[0]]}", options: "rmA"},
    {trigger: "([a-zA-Z])bar", replacement: "\\bar{[[0]]}", options: "rmA"},
	{trigger: "([a-zA-Z])dot", replacement: "\\dot{[[0]]}", options: "rmA", priority: -1},
	{trigger: "([a-zA-Z])ddot", replacement: "\\ddot{[[0]]}", options: "rmA", priority: 1},
	{trigger: "([a-zA-Z])tilde", replacement: "\\tilde{[[0]]}", options: "rmA"},
	{trigger: "([a-zA-Z])und", replacement: "\\underline{[[0]]}", options: "rmA"},
	{trigger: "([a-zA-Z])vec", replacement: "\\vec{[[0]]}", options: "rmA"},
    {trigger: "([a-zA-Z]),\\.", replacement: "\\mathbf{[[0]]}", options: "rmA"},
	{trigger: "([a-zA-Z])\\.,", replacement: "\\mathbf{[[0]]}", options: "rmA"},
	{trigger: "\\\\(${GREEK}),\\.", replacement: "\\boldsymbol{\\[[0]]}", options: "rmA"},
	{trigger: "\\\\(${GREEK})\\.,", replacement: "\\boldsymbol{\\[[0]]}", options: "rmA"},

	{trigger: "hat", replacement: "\\hat{$0}$1", options: "mA"},
    {trigger: "bar", replacement: "\\bar{$0}$1", options: "mA"},
	{trigger: "dot", replacement: "\\dot{$0}$1", options: "mA", priority: -1},
	{trigger: "ddot", replacement: "\\ddot{$0}$1", options: "mA"},
	{trigger: "cdot", replacement: "\\cdot", options: "mA"},
	{trigger: "tilde", replacement: "\\tilde{$0}$1", options: "mA"},
	{trigger: "und", replacement: "\\underline{$0}$1", options: "mA"},
	{trigger: "vec", replacement: "\\vec{$0}$1", options: "mA"},

    // More auto letter subscript
    {trigger: /([A-Za-z])_(\d\d)/, replacement: "[[0]]_{[[1]]}", options: "rmA"},
	{trigger: /\\hat{([A-Za-z])}(\d)/, replacement: "\\hat{[[0]]}_{[[1]]}", options: "rmA"},
	{trigger: /\\vec{([A-Za-z])}(\d)/, replacement: "\\vec{[[0]]}_{[[1]]}", options: "rmA"},
	{trigger: /\\mathbf{([A-Za-z])}(\d)/, replacement: "\\mathbf{[[0]]}_{[[1]]}", options: "rmA"},

    {trigger: "xnn", replacement: "x_{n}", options: "mA"},
	{trigger: "\\xii", replacement: "x_{i}", options: "mA", priority: 1},
	{trigger: "xjj", replacement: "x_{j}", options: "mA"},
	{trigger: "xp1", replacement: "x_{n+1}", options: "mA"},
	{trigger: "ynn", replacement: "y_{n}", options: "mA"},
	{trigger: "yii", replacement: "y_{i}", options: "mA"},
	{trigger: "yjj", replacement: "y_{j}", options: "mA"},

    // Symbols
    {trigger: "ooo", replacement: "\\infty", options: "mA"},
	{trigger: "sum", replacement: "\\sum", options: "mA"},
	{trigger: "prod", replacement: "\\prod", options: "mA"},
	{trigger: "\\sum", replacement: "\\sum_{${0:i}=${1:1}}^{${2:N}} $3", options: "m"},
	{trigger: "\\prod", replacement: "\\prod_{${0:i}=${1:1}}^{${2:N}} $3", options: "m"},
    {trigger: "lim", replacement: "\\lim_{ ${0:n} \\to ${1:\\infty} } $2", options: "mA"},
    {trigger: "+-", replacement: "\\pm", options: "mA"},
	{trigger: "-+", replacement: "\\mp", options: "mA"},
    {trigger: "...", replacement: "\\dots", options: "mA"},
    {trigger: "nabl", replacement: "\\nabla", options: "mA"},
	{trigger: "del", replacement: "\\nabla", options: "mA"},
    {trigger: "xx", replacement: "\\times", options: "mA"},
    {trigger: "**", replacement: "\\cdot", options: "mA"},
    {trigger: "para", replacement: "\\parallel", options: "mA"},

	{trigger: "===", replacement: "\\equiv", options: "mA"},
    {trigger: "!=", replacement: "\\neq", options: "mA"},
	{trigger: ">=", replacement: "\\geq", options: "mA"},
	{trigger: "<=", replacement: "\\leq", options: "mA"},
	{trigger: ">>", replacement: "\\gg", options: "mA"},
	{trigger: "<<", replacement: "\\ll", options: "mA"},
	{trigger: "simm", replacement: "\\sim", options: "mA"},
	{trigger: "sim=", replacement: "\\simeq", options: "mA"},
    {trigger: "prop", replacement: "\\propto", options: "mA"},

    {trigger: "\down", replacement: "\downarrow", options: "mA"},
    {trigger: "\\up", replacement: "\\uparrow", options: "mA"},
    {trigger: "<->", replacement: "\\leftrightarrow ", options: "mA"},
	{trigger: "->", replacement: "\\to", options: "mA"},
	{trigger: "!>", replacement: "\\mapsto", options: "mA"},
    {trigger: "=>", replacement: "\\implies", options: "mA"},
	{trigger: "=<", replacement: "\\impliedby", options: "mA"},
	{trigger: "and", replacement: "\\cap", options: "mA"},
	{trigger: "orr", replacement: "\\cup", options: "mA"},
	{trigger: "inn", replacement: "\\in", options: "mA"},
	{trigger: "notin", replacement: "\\not\\in", options: "mA"},
    {trigger: "\\\\\\", replacement: "\\setminus", options: "mA"},
    {trigger: "sub=", replacement: "\\subseteq", options: "mA"},
    {trigger: "sup=", replacement: "\\supseteq", options: "mA"},
	{trigger: "eset", replacement: "\\emptyset", options: "mA"},
	{trigger: "set", replacement: "\\{ $0 \\}$1", options: "mA"},
	{trigger: "e\\xi sts", replacement: "\\exists", options: "mA", priority: 1},

	{trigger: "LL", replacement: "\\mathcal{L}", options: "mA"},
	{trigger: "HH", replacement: "\\mathcal{H}", options: "mA"},
	{trigger: "CC", replacement: "\\mathbb{C}", options: "mA"},
	{trigger: "RR", replacement: "\\mathbb{R}", options: "mA"},
	{trigger: "ZZ", replacement: "\\mathbb{Z}", options: "mA"},
	{trigger: "NN", replacement: "\\mathbb{N}", options: "mA"},
    {trigger: "ben", replacement: "⏣", options: "mA"},
    {trigger: "ce",  replacement: "\\ce{$0}$1", options: "mA"},
    {trigger: "rg1", replacement: "▢", options: "mA"},
    {trigger: "rg2", replacement: "▨", options: "mA"},
    {trigger: "rg3", replacement: "▥", options: "mA"},
    {trigger: "rg4", replacement: "▣", options: "mA"},
    {trigger: "deg", replacement: "^{\\circ} $0", options: "mA"},

    // Handle spaces and backslashes

    // Snippet variables can be used as shortcuts when writing snippets.
    // For example, ${GREEK} below is shorthand for "alpha|beta|gamma|Gamma|delta|..."
    // You can edit snippet variables under the Advanced snippet settings section.

	{trigger: "([^\\\\])(${GREEK})", replacement: "[[0]]\\[[1]]", options: "rmA", description: "Add backslash before Greek letters"},
	{trigger: "([^\\\\])(${SYMBOL})", replacement: "[[0]]\\[[1]]", options: "rmA", description: "Add backslash before symbols"},

    // Insert space after Greek letters and symbols
	{trigger: "\\\\(${GREEK}|${SYMBOL}|${MORE_SYMBOLS})([A-Za-z])", replacement: "\\[[0]] [[1]]", options: "rmA"},
	{trigger: "\\\\(${GREEK}|${SYMBOL}) sr", replacement: "\\[[0]]^{2}", options: "rmA"},
	{trigger: "\\\\(${GREEK}|${SYMBOL}) cb", replacement: "\\[[0]]^{3}", options: "rmA"},
	{trigger: "\\\\(${GREEK}|${SYMBOL}) rd", replacement: "\\[[0]]^{$0}$1", options: "rmA"},
	{trigger: "\\\\(${GREEK}|${SYMBOL}) hat", replacement: "\\hat{\\[[0]]}", options: "rmA"},
	{trigger: "\\\\(${GREEK}|${SYMBOL}) dot", replacement: "\\dot{\\[[0]]}", options: "rmA"},
	{trigger: "\\\\(${GREEK}|${SYMBOL}) bar", replacement: "\\bar{\\[[0]]}", options: "rmA"},
	{trigger: "\\\\(${GREEK}|${SYMBOL}) vec", replacement: "\\vec{\\[[0]]}", options: "rmA"},
	{trigger: "\\\\(${GREEK}|${SYMBOL}) tilde", replacement: "\\tilde{\\[[0]]}", options: "rmA"},
	{trigger: "\\\\(${GREEK}|${SYMBOL}) und", replacement: "\\underline{\\[[0]]}", options: "rmA"},


    // Derivatives and integrals
    {trigger: "par", replacement: "\\frac{ \\partial ${0:y} }{ \\partial ${1:x} } $2", options: "m"},
    {trigger: /pa([A-Za-z])([A-Za-z])/, replacement: "\\frac{ \\partial [[0]] }{ \\partial [[1]] } ", options: "rm"},
    {trigger: "ddt", replacement: "\\frac{d}{dt} ", options: "mA"},

    {trigger: /([^\\])int/, replacement: "[[0]]\\int", options: "mA", priority: -1},
    {trigger: "\\int", replacement: "\\int $0 \\, d${1:x} $2", options: "m"},
    {trigger: "dint", replacement: "\\int_{${0:0}}^{${1:1}} $2 \\, d${3:x} $4", options: "mA"},
    {trigger: "oint", replacement: "\\oint", options: "mA"},
	{trigger: "iint", replacement: "\\iint", options: "mA"},
    {trigger: "iiint", replacement: "\\iiint", options: "mA"},
    {trigger: "oinf", replacement: "\\int_{0}^{\\infty} $0 \\, d${1:x} $2", options: "mA"},
	{trigger: "infi", replacement: "\\int_{-\\infty}^{\\infty} $0 \\, d${1:x} $2", options: "mA"},


    // Trigonometry
    {trigger: /([^\\])(arcsin|sin|arccos|cos|arctan|tan|csc|sec|cot)/, replacement: "[[0]]\\[[1]]", options: "rmA", description: "Add backslash before trig funcs"},

    {trigger: /\\(arcsin|sin|arccos|cos|arctan|tan|csc|sec|cot)([A-Za-gi-z])/,
     replacement: "\\[[0]] [[1]]", options: "rmA",
     description: "Add space after trig funcs. Skips letter h to allow sinh, cosh, etc."},

    {trigger: /\\(sinh|cosh|tanh|coth)([A-Za-z])/,
     replacement: "\\[[0]] [[1]]", options: "rmA",
     description: "Add space after hyperbolic trig funcs"},


    // Visual operations
	{trigger: "U", replacement: "\\underbrace{ ${VISUAL} }_{ $0 }", options: "mA"},
	{trigger: "O", replacement: "\\overbrace{ ${VISUAL} }^{ $0 }", options: "mA"},
	{trigger: "B", replacement: "\\underset{ $0 }{ ${VISUAL} }", options: "mA"},
	{trigger: "C", replacement: "\\cancel{ ${VISUAL} }", options: "mA"},
	{trigger: "K", replacement: "\\cancelto{ $0 }{ ${VISUAL} }", options: "mA"},
	{trigger: "S", replacement: "\\sqrt{ ${VISUAL} }", options: "mA"},


    // Physics
	{trigger: "kbt", replacement: "k_{B}T", options: "mA"},
	{trigger: "msun", replacement: "M_{\\odot}", options: "mA"},

    // Quantum mechanics
    {trigger: "dag", replacement: "^{\\dagger}", options: "mA"},
	{trigger: "o+", replacement: "\\oplus ", options: "mA"},
	{trigger: "ox", replacement: "\\otimes ", options: "mA"},
    {trigger: "bra", replacement: "\\bra{$0} $1", options: "mA"},
	{trigger: "ket", replacement: "\\ket{$0} $1", options: "mA"},
	{trigger: "brk", replacement: "\\braket{ $0 | $1 } $2", options: "mA"},
    {trigger: "outer", replacement: "\\ket{${0:\\psi}} \\bra{${0:\\psi}} $1", options: "mA"},

    // Chemistry
	{trigger: "pu", replacement: "\\pu{ $0 }", options: "mA"},
	{trigger: "cee", replacement: "\\ce{ $0 }", options: "mA"},
	{trigger: "he4", replacement: "{}^{4}_{2}He ", options: "mA"},
	{trigger: "he3", replacement: "{}^{3}_{2}He ", options: "mA"},
	{trigger: "iso", replacement: "{}^{${0:4}}_{${1:2}}${2:He}", options: "mA"},


    // Environments
	{trigger: "pmat", replacement: "\\begin{pmatrix}\n$0\n\\end{pmatrix}", options: "MA"},
	{trigger: "bmat", replacement: "\\begin{bmatrix}\n$0\n\\end{bmatrix}", options: "MA"},
	{trigger: "Bmat", replacement: "\\begin{Bmatrix}\n$0\n\\end{Bmatrix}", options: "MA"},
	{trigger: "vmat", replacement: "\\begin{vmatrix}\n$0\n\\end{vmatrix}", options: "MA"},
	{trigger: "Vmat", replacement: "\\begin{Vmatrix}\n$0\n\\end{Vmatrix}", options: "MA"},
	{trigger: "matrix", replacement: "\\begin{matrix}\n$0\n\\end{matrix}", options: "MA"},

	{trigger: "pmat", replacement: "\\begin{pmatrix}$0\\end{pmatrix}", options: "nA"},
	{trigger: "bmat", replacement: "\\begin{bmatrix}$0\\end{bmatrix}", options: "nA"},
	{trigger: "Bmat", replacement: "\\begin{Bmatrix}$0\\end{Bmatrix}", options: "nA"},
	{trigger: "vmat", replacement: "\\begin{vmatrix}$0\\end{vmatrix}", options: "nA"},
	{trigger: "Vmat", replacement: "\\begin{Vmatrix}$0\\end{Vmatrix}", options: "nA"},
	{trigger: "matrix", replacement: "\\begin{matrix}$0\\end{matrix}", options: "nA"},

	{trigger: "cases", replacement: "\\begin{cases}\n$0\n\\end{cases}", options: "mA"},
	{trigger: "align", replacement: "\\begin{align}\n$0\n\\end{align}", options: "mA"},
	{trigger: "array", replacement: "\\begin{array}\n$0\n\\end{array}", options: "mA"},


    // Brackets
	{trigger: "avg", replacement: "\\langle $0 \\rangle $1", options: "mA"},
	{trigger: "norm", replacement: "\\lvert $0 \\rvert $1", options: "mA", priority: 1},
	{trigger: "Norm", replacement: "\\lVert $0 \\rVert $1", options: "mA", priority: 1},
	{trigger: "ceil", replacement: "\\lceil $0 \\rceil $1", options: "mA"},
	{trigger: "floor", replacement: "\\lfloor $0 \\rfloor $1", options: "mA"},
	{trigger: "mod", replacement: "|$0|$1", options: "mA"},
	{trigger: "(", replacement: "(${VISUAL})", options: "mA"},
	{trigger: "[", replacement: "[${VISUAL}]", options: "mA"},
	{trigger: "{", replacement: "{${VISUAL}}", options: "mA"},
	{trigger: "(", replacement: "($0)$1", options: "mA"},
	{trigger: "{", replacement: "{$0}$1", options: "mA"},
	{trigger: "[", replacement: "[$0]$1", options: "mA"},
	{trigger: "lr(", replacement: "\\left( $0 \\right) $1", options: "mA"},
	{trigger: "lr{", replacement: "\\left\\{ $0 \\right\\} $1", options: "mA"},
	{trigger: "lr[", replacement: "\\left[ $0 \\right] $1", options: "mA"},
	{trigger: "lr|", replacement: "\\left| $0 \\right| $1", options: "mA"},
	{trigger: "lra", replacement: "\\left< $0 \\right> $1", options: "mA"},
    {trigger: "  ", replacement: "\\space ", options: "mA"},


    // Misc

    // Automatically convert standalone letters in text to math (except a, A, I).
    // (Un-comment to enable)
    // {trigger: /([^'])\b([B-HJ-Zb-z])\b([\n\s.,?!:'])/, replacement: "[[0]]$[[1]]$[[2]]", options: "tA"},

    // Automatically convert Greek letters in text to math.
    {trigger: "(${GREEK})([\\n\\s.,?!:'])", replacement: "$\\[[0]]$[[1]]", options: "rtAw"},

    // Automatically convert text of the form "x=2" and "x=n+1" to math.
    {trigger: /([A-Za-z]=\d+)([\n\s.,?!:'])/, replacement: "$[[0]]$[[1]]", options: "rtAw"},
    {trigger: /([A-Za-z]=[A-Za-z][+-]\d+)([\n\s.,?!:'])/, replacement: "$[[0]]$[[1]]", options: "tAw"},


    // Snippet replacements can have placeholders.
	{trigger: "tayl", replacement: "${0:f}(${1:x} + ${2:h}) = ${0:f}(${1:x}) + ${0:f}'(${1:x})${2:h} + ${0:f}''(${1:x}) \\frac{${2:h}^{2}}{2!} + \\dots$3", options: "mA", description: "Taylor expansion"},

    // Snippet replacements can also be JavaScript functions.
    // See the documentation for more information.
	{trigger: /iden(\d)/, replacement: (match) => {
		const n = match[1];

		let arr = [];
		for (let j = 0; j < n; j++) {
			arr[j] = [];
			for (let i = 0; i < n; i++) {
				arr[j][i] = (i === j) ? 1 : 0;
			}
		}

		let output = arr.map(el => el.join(" & ")).join(" \\\\\n");
		output = `\\begin{pmatrix}\n${output}\n\\end{pmatrix}`;
		return output;
	}, options: "mA", description: "N x N identity matrix"},
]
```
# Image Toolkit
Features:
- Zoom in or out an image by mouse wheel or clicking toolbar zoom icons
- Move an image by dragging mouse cursor or pressing keyboard arrow keys
- Preview an image in full-screen mode
- Rotate or flip an image by clicking footer toolbar icons
- Invert the color of an image
- Copy an image
![](image%20toolkit.png)
# Checklist Progress
Simple Obsidian plugin to automatically update the progress in a list of tasks. Given, for example, the following note:
```md
This is a list (4/6):
- [x] item one
- [ ] item two (50%)
    - [ ] sub item one
    - [x] sub item two
- [x] item three
```
the command provided by this plugin will update it to
```md
This is a list (2/3):
- [x] item one
- [ ] item two (50%)
    - [ ] sub item one
    - [x] sub item two
- [x] item three
```

providing the fraction / percentage of completed tasks in a sub-list.

Besides using a command to trigger the update (which you can bind to a keyboard shortcut), you can also enable auto-updating when toggling a checkbox in Obsidian Live Preview mode.

Additionally, adding a minus before the fraction or percentage symbol will count _unchecked_ checkboxes. Example:

```md
This is a list (-1/3):
- [x] item one
- [ ] item two
- [x] item three
```

will be updated to

```md
This is a list (-1/3):
- [x] item one
- [ ] item two
- [x] item three
```
# Chat View
its very very unlikely that you need this but I found this plugin cool so if you are ever working on a script click [here](https://github.com/adifyr/obsidian-chat-view)
![](Chatview.png)


