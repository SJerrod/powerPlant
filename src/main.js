import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {stateControl, blueFood, feed, superWater, water, light, sunshine, currentState} from './js/powerPlant.js';

$(document).ready(function() {
  $('#feed').click(function() {
    const newState = stateControl(blueFood);
    $('#soil-value').text(`Soil: ${newState.soil}`);
  });
  $('#water').click(function() {
    const newState = stateControl(superWater);
    $('#water-value').text(`Water: ${newState.water}`);
  });
  $('#light').click(function() {
    const newState = stateControl(sunshine);
    $('#light-value').text(`Light: ${newState.light}`);
  });
  $('#show-state').click(function() {
    const currentState = stateControl();
    $('#soil-value').text(currentState.soil);
    $('#water-value').text(currentState.water);
    $('#light-value').text(currentState.light);
  });
  console.log(feed);
  console.log(water);
  console.log(light);
  console.log(currentState);
});