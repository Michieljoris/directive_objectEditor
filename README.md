directive_objectEditor
======================

Visual javascript object inspector and editor as a Angularjs directive

My first attempt at writing an angularjs directive.

It uses two other directives: xeditable and yatree. 

Use it like this:
  
      <object-editor edit-object="myObject"></object-editor>
      
where myObject is the object you want to bind with the editor.

The visual layout is not ideal, and I still don't understand all the ins and outs of directives, but it works.

You can drag any object or array anywhere within the object, and edit all keys and values.

I had little add and remove buttons on every node at first but is not necessary. 

You can add an array, object or value with the buttons on top. Then drag them too where you want them in the object.

Vice versa if you want to delete a value, object or array, create an object or array and drag it in there. 

The resulting edited object will be in myObject[0]

The two-way binding works, but not from editor instance to editor
instance. It should work, but doesn't. Something to do with scopes and
watches and digests..

TODO:
* There is a bug if you empty out an object of array. It doesn't affect
functionality. 
