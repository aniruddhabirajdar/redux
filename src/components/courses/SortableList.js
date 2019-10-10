import React, {Component} from 'react';
import {render} from 'react-dom';
import {SortableContainer, SortableElement, sortableHandle,} from 'react-sortable-hoc';
import VirtualList from 'react-tiny-virtual-list';

const DragHandle = sortableHandle(() => <>::</>);
const SortableItem = SortableElement(({value}) => <div style={{"padding":"0 10px","boxSizing":"border-box","borderBottom":"1px solid #EEE","lineHeight":"50px"}}> <DragHandle/>{value} </div>);
const SortableList = SortableContainer(({courses}) => {

  return (
   
    <>
    <VirtualList
    width='100%'
    height={500}
    itemCount={courses.length}
    itemSize={50} 
    style={{"margin":"20px","background":"#FFF","borderRadius":"2px","boxShadow":"0 2px 2px 0 rgba(0,0,0,.14),\n    0 3px 1px -2px rgba(0,0,0,.2),\n    0 1px 5px 0 rgba(0,0,0,.12)"}}
    renderItem={ ({index, style}) =>
      
      <SortableItem key={`item-${courses[index].id}`} index={courses[index].id} value={courses[index].title} />
      
    }
  />


      
      </>
 
  );
});



export default SortableList;