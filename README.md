# 📜 Ye Olde Bookshelf 
By Denalia Zhi  [👩🏻](https://github.com/denaliazhi)

### A digital library for people caught in the past

![Library](https://github.com/user-attachments/assets/403aa3fc-a68c-493c-b023-6ccd351a26ad)

**Hail, time’s wayfarer.** Thou art a most worthy soul, judging by the tomes thou dost bear. 

But soft! What if thou couldst keep account of every tome thou hast perused without so much as raising a quill?
Permit me to unveil this marvel of the century: the library digital.
_(Translated by [Shakespeare](https://openl.io/translate/shakespearean)_)

### Features:
- Have the title, author, and page count for each of thy books inscribed upon a cover of leather [^1]
- Bestow thy thumb (up or down) to books thou hast or hast not read
- Cast away volumes from thy library with but a simple click

**If thou hast interest** → [<kbd> <br> Live preview <br> </kbd>](https://denaliazhi.github.io/odin-library/)

---

### Technical details:
This app was my submission for the [Library Project](https://www.theodinproject.com/lessons/node-path-javascript-library) in TOP's[^2] Fullstack Javascript path.

#### Premise
Create an app that allows users to maintain a digital "library" of books. Users should be able to add/remove records to/from the library. 
Each record of a book should show its title, author, page count, and read status (whether the user has read the book).

| Language | Skills | Application |
| ----------- | ----------- | ----------- |
| HTML | `form` | Collect and validate user data (client-side).<br>Limit title and author length. Limit page count to whole numbers.<br>Server-side validation will be applied in future projects. |
| CSS | `grid` | Layout each book element with a sidebar. |
| CSS | `flex` | Adjust number of books displayed in each row based on window size. |
| JS | arrays, functions, objects, event listeners | Dynamically render books upon form submission. |

👀 Please see my [commit history](https://github.com/denaliazhi/odin-library/commits/main/) for details on my problem-solving process

#### Enhancements
If I were to revisit this project at a later date, I'd want to tackle the following:
- Write a more graceful way in Javascript to toggle the read status for each book
- Store data in server so that book display is preserved on page reload
- Add filter, sort, and search options for books on shelf
- Add feature to edit book details once added to shelf
- Add color picker for book cover
- Add notes option to each book

[^1]: I designed the book covers in Figma
[^2]: What is TOP? [The Odin Project](https://www.theodinproject.com/about) is an open-source, self-guided web development curriculum. I started TOP in April 2025.
