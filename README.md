# QuizVerse — Online Quiz Application

A polished, responsive front-end prototype for a college project, with starter Java backend code and a C++ scoring module.

## Tech stack

- **HTML**: page structure
- **CSS**: responsive visual design
- **JavaScript**: quiz navigation, timer, scoring, review, and browser-based history
- **Java**: lightweight HTTP API using the JDK's built-in `HttpServer`
- **C++**: standalone scoring engine for demonstrating the C++ component

## Features in this prototype

- Six quiz categories: Java, C++, HTML, DBMS, logical reasoning, and science
- Timed multiple-choice quizzes
- Previous/next navigation and question palette
- Submit confirmation and automatic submission when time runs out
- Instant score and answer explanations
- Attempt history saved in browser `localStorage`
- Demo leaderboard
- Responsive desktop/mobile layout

## Run the website

1. Extract the ZIP.
2. Open `index.html` in a modern browser.
3. Select a quiz and try it.

The website prototype works without a server. Google Fonts are optional; if offline, the browser uses fallback fonts.

## Run the Java API

Requires JDK 11 or newer.

```bash
cd backend
javac QuizVerseServer.java
java QuizVerseServer
```

Check `http://localhost:8080/api/health`.

To test the score endpoint, send a POST request with JSON:

```bash
curl -X POST http://localhost:8080/api/score \
  -H "Content-Type: application/json" \
  -d '{"correct":4,"total":5}'
```

Expected response:

```json
{"correct":4,"total":5,"percentage":80}
```

The provided front end currently computes results locally; the API is a starter endpoint, not yet wired into the front end.

## Run the C++ scoring module

Requires a C++17-compatible compiler.

```bash
cd cpp
g++ -std=c++17 score_engine.cpp -o score_engine
echo "5 1 1 2 2 0 0 3 3 4 -1" | ./score_engine
```

Input format: first the number of questions, then pairs of `correct_index selected_index`. Indexes are zero-based; use `-1` for unanswered.

## Suggested project architecture for your viva

```text
Browser (HTML/CSS/JavaScript)
          |
          | HTTP requests (next integration step)
          v
       Java API
          |
          +---- Database (recommended next step: MySQL)
          |
          +---- C++ scoring executable (optional integration)
```

## Important project notes

- This is a **working front-end demo plus starter backend modules**, not a production-ready exam system.
- Authentication, server-side answer validation, MySQL persistence, admin question creation, and a live leaderboard still need to be implemented for a complete deployed application.
- Do not trust a score sent by the browser for a real exam. In a production version, keep correct answers on the server and calculate the score there.
