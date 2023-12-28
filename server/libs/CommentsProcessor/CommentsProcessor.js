const MODIFICATION_TYPES = {
  FILE_IMPORT: 0,
  CSS_FILE_COMPONENT_STYLE: 1,
  ADD_COMPONENT_CONTENT: 2,
  CSS_FILE_END: 3,
};

const structureComment = (modificationType, fileName, componentType, id) => {
  if (fileName == null || modificationType == null) {
    throw Error("Filename or modificationType can not be null");
  }
  if (fileName.includes(".css")) {
    if (modificationType === MODIFICATION_TYPES.CSS_FILE_COMPONENT_STYLE) {
      if (!id) {
        throw Error("id can not be null");
      }
      return `/* ${fileName}->${id} */`;
    } else if (modificationType === MODIFICATION_TYPES.CSS_FILE_END) {
      return `/* ${fileName}->end */`;
    } else {
      throw Error(`Can only apply Style action to a css file.`);
    }
  }
  if (modificationType === MODIFICATION_TYPES.FILE_IMPORT) {
    return `/* ${fileName}->import */`;
  }
  if (modificationType === MODIFICATION_TYPES.ADD_COMPONENT_CONTENT) {
    if (id == undefined || componentType == undefined) {
      throw Error("Cant modify content of component without type or Id");
    }
    return `{/* ${fileName}->return->${componentType}->${id}->content */}`;
  }
};
module.exports = { MODIFICATION_TYPES, structureComment };
