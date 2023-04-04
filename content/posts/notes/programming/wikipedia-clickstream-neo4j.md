---
title: Wikipedia click-stream data and Neo4j
subtitle: Recording the process for importing Wikipedia click-stream data into a Neo4j database
date: 2022-11-26
lastupdated: 2022-11-26
published: true
layout: post
topics: ["notes"]
category: notes
---

## Prerequisite Knowledge

## 0. Set Up Neo4j

-   Download Neo4j Desktop following the instructions [here](https://neo4j.com/download/).
-   Create a DBMS (I named mine `WikiGraph`) and a new database (which I named `clickstream-MM-YYYY`).
-   Add a local DBMS (I named mine `Clickstream`) and set a password for it.

## 1. Download the Click-Stream Data

-   Download the data from the latest Wikipedia click-stream dump located [here](https://dumps.wikimedia.org/other/clickstream/). The downloaded result will be a `.tsv`, or "tab-separated values" file.

## 2. Process the Dump

We have to convert the `.tsv` file into a `.csv`, or "comma-separated values" file in order to import it into our Neo4j database.
We also have to clean some of the text!
We'll do this using Python. Open a Python shell in the Terminal and run the following (borrowed from [this](https://www.geeksforgeeks.org/python-convert-tsv-to-csv-file/) tutorial):

```
import re

ignore_list = ["other", "other-empty", "other-external", "other-internal", "other-other", "other-search"]

with open(*PATH_TO_TSV*, 'r') as tsv:
    with open(*PATH_TO_CSV*, 'w') as csv:
        for line in tsv:
            # skip lines that contain words that are in the ignore list
            if set(line.split("\t")) & set(ignore_list):
                continue
            else :
                content = re.sub(",", "", line)      # replace every comma with an empty string
                content = re.sub("_", " ", content)  # replace every underscore with a space
                content = re.sub('"', "", content)   # replace every " with an empty string
                content = re.sub("\t", ",", content) # replace every tab with a comma
                csv.write(content)
```

## 3. Import Data into a Neo4j Database

-   Move the `.csv` file you created into the `import/` directory for your DBMS. You can open the import folder for your DBMS in Finder through Neo4j Desktop: click the `...` next to the `Open` button, then `Open folder > Import`.
