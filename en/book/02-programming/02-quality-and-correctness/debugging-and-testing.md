Last updated: 2026-07-21

Status:

Tags: [[Software Engineering]], [[Programming]]


## Testing

>  API testing frameworks


- Test suite: Collection of all tests
- Unit test: Tests an isolated feature
- Integration test: Ensures components work together
- Regression test: Prevents reoccurrence of past bugs
- Mocking: Replacing parts of a system to isolate tests

#### **Step 1 — Basics of Testing in Python**

- Learn the **unittest** module (built-in).
    
- Concepts: test case, assertions, setup/teardown methods.
    
- 📖 Tutorial:
    
    - [Python unittest docs](https://docs.python.org/3/library/unittest.html)
        
    - [Real Python – Getting Started With Testing in Python](https://realpython.com/python-testing/)
        
    
- 🏋️ Practice:
    
    - Write unit tests for a small utility function (e.g., palindrome checker).
        
    - Try using assertEqual, assertTrue, and assertRaises.
        
    

---

#### **Step 2 — Modern Testing With pytest**

- Why pytest: Less boilerplate, powerful fixtures, better readability.
    
- Learn:
    
    - Writing simple test functions.
        
    - Using fixtures for setup/teardown.
        
    - Parametrized tests.
        
    
- 📖 Tutorial:
    
    - [Pytest Documentation](https://docs.pytest.org/en/stable/)
        
    - [Pytest Crash Course (YouTube)](https://www.youtube.com/watch?v=etosV2IWBF0)
        
    
- 🏋️ Practice:
    
    - Convert your unittest tests to pytest.
        
    - Add multiple test cases using @pytest.mark.parametrize.
        
    

---

#### **Step 3 — Mocking and Patching**

- Learn **unittest.mock** and pytest-mock.
    
- Understand:
    
    - patch, Mock, and MagicMock.
        
    - When to mock vs. when to use real dependencies.
        
    
- 📖 Tutorial:
    
    - [Mocking in Python – Real Python](https://realpython.com/python-mock-library/)
        
    - [unittest.mock official docs](https://docs.python.org/3/library/unittest.mock.html)
        
    
- 🏋️ Practice:
    
    - Mock an API call (replace requests.get).
        
    - Mock database calls in a data access layer.
        
    

---

#### **Step 4 — Integration and Regression Testing**

- Learn:
    
    - Running tests against a staging DB or local API server.
        
    - Adding regression tests when fixing bugs.
        
    
- 📖 Tutorial:
    
    - [Integration Testing With Python – TestDriven.io](https://testdriven.io/blog/python-integration-tests/)
        
    
- 🏋️ Practice:
    
    - Write a test that inserts & fetches data from a SQLite DB.
        
    - After fixing a bug, write a test reproducing it.
        
    

---

#### **Step 5 — Test Automation & Coverage**

- Learn:
    
    - Running tests in CI/CD (GitHub Actions, GitLab CI).
        
    - Measuring coverage (coverage.py).
        
    
- 📖 Tutorial:
    
    - [Coverage.py docs](https://coverage.readthedocs.io/)
        
    - [GitHub Actions Python CI Example](https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-python)
        
    
- 🏋️ Practice:
    
    - Set up GitHub Actions to run tests on every push.
        
    - Achieve at least **90% code coverage** for a small project.
        
    

---

#### **Step 6 — Advanced Testing Practices**

- Learn:
    
    - Property-based testing (hypothesis).
        
    - Performance testing.
        
    - Snapshot testing.
        
    
- 📖 Tutorial:
    
    - [Hypothesis Docs](https://hypothesis.readthedocs.io/)
        
    
- 🏋️ Practice:
    
    - Use Hypothesis to test your function with random inputs.
        
    - Create performance benchmarks for critical functions.
        
    

---

### **3.** 

### **Recommended Resources**

- **Books**:
    
    - _Python Testing with pytest_ by Brian Okken.
        
    - _Test-Driven Development with Python_ by Harry Percival.
        
    
- **Courses**:
    
    - [Pytest – Pluralsight](https://www.pluralsight.com/courses/python-pytest)
        
    - [Test-Driven Development in Python – TestDriven.io](https://testdriven.io/courses/tdd/)
        
    
- **Cheat Sheets**:
    
    - [Pytest Cheat Sheet](https://cheatography.com/davechild/cheat-sheets/pytest/)
## Reference