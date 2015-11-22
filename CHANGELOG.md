# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [1.1.2] - 2015-11-22

### Added
- New build step
- Prepublish build step

### Changed
- Removed babel-core as a direct dependency (dirp)
- NPM now ignores lib in favor of dist
- babel-core/register is only call for tests

### Fixed
- An issue where the package would not properly import

## [1.1.1] - 2015-11-21

### Fixed
- Updated babel-core to be a direct dependency

## [1.1.0] - 2015-11-21

### Added
- Background null processor

### Changed
- Updated changelog
- Reorganized file structure

## [1.0.0] - 2015-11-21

### Added
- Generic null processor
- Font null processor
