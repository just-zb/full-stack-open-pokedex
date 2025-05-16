Consider a model Golang backend web application that uses a PostgreSQL database.
The CI steps may include:
- linting the code: `golangci‑lint`, It’s the de facto Go linting tool for CI pipeline
- testing the code: `go test`, The built‑in command provided by the testing package for unit tests, benchmarks, fuzzing, and examples.
- building the code: `go build & go install`, Core commands to compile and install Go binaries. `go build` compiles packages and dependencies, producing executables; go install also places them into your $GOPATH/bin or module cache.

So the way to set up CI has many options, like:
- AWS CodePipeline: based on cloud
- Azure Pipelines: Self‑hosted
- GitLab CI/CD: different from GitHub Actions, GitLab CI/CD is self-hosted.

Choosing self-hosted or cloud-based CI/CD depends on the project requirements, team preferences, and infrastructure considerations.
If this application is business-critical, self-hosted CI/CD may be preferred for security and control.
But if the application is open-source, small or medium-sized, or if the team prefers a cloud-based solution, then cloud-based CI/CD may be more suitable.
So cloud-based CI/CD is preferred for its ease of use, scalability, and cost-effectiveness, and also because it is a small self-project.