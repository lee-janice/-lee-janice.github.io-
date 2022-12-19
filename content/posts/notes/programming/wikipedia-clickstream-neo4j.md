---
title: Wikipedia click-stream data and Neo4j
subtitle: Recording the process for importing Wikipedia click-stream data into a Neo4j database
date: 2022-11-26
lastupdated: 2022-11-26
published: false
layout: post
topics: ["notes"]
category: notes
---

## 0. Set up Neo4j

- Download Neo4j Desktop following the instructions [here](https://neo4j.com/download/).
- Create a DBMS (I named mine `WikiGraph`) and a new database (which I named `clickstream-MM-YYYY`).
- Add a local DBMS (I named mine `Clickstream`) and set a password for it.

## 1. Download the click-stream data

- Download the data from the latest dump located [here](https://dumps.wikimedia.org/other/clickstream/). The downloaded result will be a `.tsv`, or "tab-separated values" file.

## 2. Process the downloaded file

We have to convert the `.tsv` file into a `.csv`, or "comma-separated values" file in order to import it into our Neo4j database.
We'll do this using Python. Open a Python shell in the Terminal and run the following (borrowed from [this](https://www.geeksforgeeks.org/python-convert-tsv-to-csv-file/) tutorial):

```
import re

with open(*path-to-tsv*, 'r') as tsv: 
  with open(*path-to-csv*, 'w') as csv:
    for line in tsv:
      content = re.sub("\t", ",", line) # replace every tab with a comma
      csv.write(content)
```

## 3. Import data into the Neo4j database

- Move the `.csv` file you created into the `import/` directory for your DBMS. You can open the import folder for your DBMS in Finder through Neo4j Desktop: click the `...` next to the `Open` button, then `Open folder > Import`.
