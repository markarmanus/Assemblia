class File {
  constructor(path, name, content) {
    this.path = path;
    this.name = name;
    this.content = content;
  }
  createComponent(id, type, content) {}
  addComponentContent(id, content) {}
  deleteComponent(id) {}
  addComponentCSSProperty(id, property, value) {}
  addImport(importLine) {}
}
module.exports = File;
