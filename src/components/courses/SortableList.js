import React, {Component} from 'react';
import {render} from 'react-dom';
import {SortableContainer, SortableElement, sortableHandle,} from 'react-sortable-hoc';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const DragHandle = sortableHandle(() => <FontAwesomeIcon icon={faBars} /> );
const SortableItem = SortableElement(({value}) => <li className="list-group-item"><DragHandle/>   {value}</li>);

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