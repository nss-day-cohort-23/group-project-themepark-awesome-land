'use strict';

const factory = require('./factory');
const _ = require('lodash');
const $ = require('jquery');


// Search function to match user input with JSON
module.exports.highlightArea = () => {
    $(document).ready(function(){
        $("#search").keydown(function(e){
            if(e.which == 13) {
                var userSearch = $("#search").val().toLowerCase();
                $('#search').val(''); //CLEAR INPUT
                $(".highlight").removeClass("highlight");
                factory.getAttractions().then( (attrData) => {
                    var matchingAttractions = [];
                    for (let i = 0; i < attrData.length; i++){
                        var attractionNames = attrData[i].name.toLowerCase();
                        if(attractionNames.includes(userSearch)){
                            matchingAttractions.push(attrData[i]);
                        }
                    }
                    //loop over matching attractions array and find the area_id key
                    getAreaID(matchingAttractions);
                    return matchingAttractions;
                });
            }
        });
    });

    //loop over matching attractions array and find the area_id key
    function getAreaID(attractionArr) {
        var idArr = [];
        attractionArr.forEach(function(e){
        idArr.push(e.area_id);
    // use area_id to give a class to area section, or to toggle highlight class
        let newIdArr = _.uniqBy(idArr);
        newIdArr.forEach( (area_id) =>{
            $(`#${area_id}`)
            .addClass("highlight");
            
            $(".wrapper").click( () =>{
                $(`#${area_id}`)
                .removeClass("highlight");
            });
        }); 
        return idArr;
    });
    }
};

