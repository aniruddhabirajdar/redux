import React, {Component} from 'react';
import {render} from 'react-dom';
import {SortableContainer, SortableElement, sortableHandle,} from 'react-sortable-hoc';

const DragHandle = sortableHandle(() => <span>::</span>);
const SortableItem = SortableElement(({value}) => <li className="list-group-item"><DragHandle/>{value}</li>);

const SortableList = SortableContainer(({courses}) => {
  return (
   
    <ul id="sortable" className="list-group">

      {courses.map(course => (
        
        <SortableItem key={`item-${course.id}`} index={course.id} value={course.title} />
      ))}
     </ul>
 
  );
});



export default SortableList;