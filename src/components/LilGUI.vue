<script lang="ts">
import GUI from 'lil-gui'; 

const gui = new GUI({ title: "Settings" } );
const obj = { 
  '2D / 3D': false, 
  'Edit mode': false
};

const perspective = gui.addFolder( 'Perspective' );
perspective
  .add( obj, '2D / 3D' ).onChange( (bool:any) => bool )//? render3D() : render2D() )
perspective.close()

const preferences = gui.addFolder( 'Preferences' );
preferences
  .add( obj, 'Edit mode' ).onChange( (bool:any) => bool ) //=> editMode = bool )
preferences.close()


// gui.add( myObject, 'myBoolean' );  // Checkbox
// gui.add( myObject, 'myFunction' ); // Button
// gui.add( myObject, 'myString' );   // Text Field
// gui.add( myObject, 'myNumber' );   // Number Field

// // Add sliders to number fields by passing min and max
// gui.add( myObject, 'myNumber', 0, 1 );
// gui.add( myObject, 'myNumber', 0, 100, 2 ); // snap to even numbers

// // Create dropdowns by passing an array or object of named values
// gui.add( myObject, 'myNumber', [ 0, 1, 2 ] );

// // Chainable methods
// // gui.add( myObject, 'myProperty' )
// //   .name( 'Custom Name' )
// //   .onChange( value => {
// //     console.log( value );
// //   } );

// // Create color pickers for multiple color formats
// const colorFormats = {
//   string: '#ffffff',
//   int: 0xffffff,
//   object: { r: 1, g: 1, b: 1 },
//   array: [ 1, 1, 1 ]
// };

// gui.addColor( colorFormats, 'string' );
gui.close();
export default gui;  
</script>

<style setup>
.lil-gui.root{ width: 150px; margin-right:300px; }
.lil-gui .children .controller .name{padding-left: 10%;width: 75px;}
.lil-gui .children .controller .widget{justify-content: center;}
</style>