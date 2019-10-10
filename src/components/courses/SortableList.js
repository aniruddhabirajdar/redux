import React, {Component} from 'react';
import {render} from 'react-dom';
import {SortableContainer, SortableElement, sortableHandle,} from 'react-sortable-hoc';

const DragHandle = sortableHandle(() => <span>::</span>);
const SortableItem = SortableElement(({value}) => <div><DragHandle/>{value}</div>);

const SortableList = SortableContainer(({courses}) => {
  return (
    <ul>
      {courses.map(course => (
        <SortableItem key={`item-${course.id}`} index={course.id} value={course.title} />
      ))}
    </ul>
  );
});



export default SortableList;