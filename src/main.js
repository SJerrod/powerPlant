import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {stateControl, blueFood, feed, superWater, water, light, sunshine, currentState, pineTreeControl} from './js/powerPlant.js';

$(document).ready(function() {

  // attempt add plant choice?
  let plant = $("option[name='plant']:selected").val();

  $('#feed').click(function() {
    const newState = stateControl(feed);
    $('#soil-value').text(`Soil: ${newState.soil}`);
    console.log(plant);
  });
  $('#blueFood').click(function() {
    const newState = stateControl(blueFood);
    $('#soil-value').text(`Soil: ${newState.soil}`);
  });

  $('#water').click(function() {
    const newState = stateControl(water);
    $('#water-value').text(`Water: ${newState.water}`);
  });
  $('#superWater').click(function() {
    const newState = stateControl(superWater);
    $('#water-value').text(`Water: ${newState.water}`);
  });

  $('#light').click(function() {
    const newState = stateControl(light);
    $('#light-value').text(`Light: ${newState.light}`);
  });
  $('#sunshine').click(function() {
    const newState = stateControl(sunshine);
    $('#light-value').text(`Light: ${newState.light}`);
  });
  $('#show-state').click(function() {
    const currentState = stateControl();
    $('#soil-value').text(currentState.soil);
    $('#water-value').text(currentState.water);
    $('#light-value').text(currentState.light);
  });
  $('#show-state2').click(function() {
    const currentState = pineTreeControl();
    $('#soil-value2').text(currentState.soil);
    $('#water-value2').text(currentState.water);
    $('#light-value2').text(currentState.light);
  });
  console.log(blueFood);
  console.log(superWater);
  console.log(sunshine);
  console.log(currentState);
});