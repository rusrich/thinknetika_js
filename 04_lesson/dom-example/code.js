function showTree() {
  let htmlDocument = document.getElementById('html')
  let htmlNode = htmlDocument.childNodes
  
  console.log('', htmlDocument.nodeType, htmlDocument.nodeName, htmlDocument.nodeValue)
  
  for (nodeLevel1 of htmlNode) {
    console.log('\t', nodeLevel1.nodeType, nodeLevel1.nodeName, nodeLevel1.nodeValue)
    
    for ( nodeLevel2 of nodeLevel1.childNodes) {
      console.log('\t\t', nodeLevel2.nodeType, nodeLevel2.nodeName)

      for (nodeLevel3 of nodeLevel2.childNodes) {
        console.log('\t\t\t', nodeLevel3.nodeType, nodeLevel3.nodeName, nodeLevel3.nodeValue)
      }
    }
    
  }
  
}

showTree()