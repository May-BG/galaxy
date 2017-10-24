define(["exports","mvc/base-mvc","mvc/citation/citation-model","utils/localization"],function(t,e,i,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(t,"__esModule",{value:!0});o(e),o(i);var s=o(n),a=Backbone.View.extend({tagName:"div",className:"citations",render:function(){return this.$el.append("<p>"+this.formattedReference()+"</p>"),this},formattedReference:function(){var t=this.model,e=t.entryType(),i=t.fields(),n="",o=this._asSentence((i.author?i.author:"")+(i.year?" ("+i.year+")":""))+" ",s=i.title||"",a=i.pages?"pp. "+i.pages:"",r=i.address;if("article"==e){var l=(i.volume?i.volume:"")+(i.number?" ("+i.number+")":"")+(a?", "+a:"");n=o+this._asSentence(s)+(i.journal?"In <em>"+i.journal+", ":"")+this._asSentence(l)+this._asSentence(i.address)+"</em>"}else n="inproceedings"==e||"proceedings"==e?o+this._asSentence(s)+(i.booktitle?"In <em>"+i.booktitle+", ":"")+(a||"")+(r?", "+r:"")+".</em>":"mastersthesis"==e||"phdthesis"==e?o+this._asSentence(s)+(i.howpublished?i.howpublished+". ":"")+(i.note?i.note+".":""):"techreport"==e?o+this._asSentence(s)+this._asSentence(i.institution)+this._asSentence(i.number)+this._asSentence(i.type):"book"==e||"inbook"==e||"incollection"==e?o+" "+this._formatBookInfo(i):o+" "+this._asSentence(s)+this._asSentence(i.howpublished)+this._asSentence(i.note);var c="";i.doi&&(n+='[<a href="'+(c="http://dx.doi.org/"+i.doi)+'" target="_blank">doi:'+i.doi+"</a>]");var d=i.url||c;return d&&(n+='[<a href="'+d+'" target="_blank">Link</a>]'),n},_formatBookInfo:function(t){var e="";return t.chapter&&(e+=t.chapter+" in "),t.title&&(e+="<em>"+t.title+"</em>"),t.editor&&(e+=", Edited by "+t.editor+", "),t.publisher&&(e+=", "+t.publisher),t.pages&&(e+=", pp. "+t.pages),t.series&&(e+=", <em>"+t.series+"</em>"),t.volume&&(e+=", Vol."+t.volume),t.issn&&(e+=", ISBN: "+t.issn),e+"."},_asSentence:function(t){return t&&t.trim()?t+". ":""}}),r=Backbone.View.extend({el:"#citations",initialize:function(){this.listenTo(this.collection,"add",this.renderCitation)},events:{"click .citations-to-bibtex":"showBibtex","click .citations-to-formatted":"showFormatted"},renderCitation:function(t){var e=new a({model:t});this.$(".citations-formatted").append(e.render().el);var i=this.$(".citations-bibtex-text");i.val(i.val()+"\n\r"+t.attributes.content)},render:function(){this.$el.html(this.citationsElement()),this.collection.each(function(t){this.renderCitation(t)},this),this.showFormatted()},showBibtex:function(){this.$(".citations-to-formatted").show(),this.$(".citations-to-bibtex").hide(),this.$(".citations-bibtex").show(),this.$(".citations-formatted").hide(),this.$(".citations-bibtex-text").select()},showFormatted:function(){this.$(".citations-to-formatted").hide(),this.$(".citations-to-bibtex").show(),this.$(".citations-bibtex").hide(),this.$(".citations-formatted").show()},partialWarningElement:function(){return this.collection.partial?['<div style="padding:5px 10px">',"<b>Warning: This is a experimental feature.</b> Most Galaxy tools will not annotate"," citations explicitly at this time. When writing up your analysis, please manually"," review your histories and find all references"," that should be cited in order to completely describe your work. Also, please remember to",' <a href="https://galaxyproject.org/citing-galaxy">cite Galaxy</a>.',"</div>"].join(""):""},citationsElement:function(){return['<div class="toolForm">','<div class="toolFormTitle">',(0,s.default)("Citations"),' <button type="button" class="btn btn-xs citations-to-bibtex" title="Show all in BibTeX format."><i class="fa fa-pencil-square-o"></i> Show BibTeX</button>',' <button type="button" class="btn btn-xs citations-to-formatted" title="Return to formatted citation list."><i class="fa fa-times"></i> Hide BibTeX</button>',"</div>",'<div class="toolFormBody" style="padding:5px 10px">',this.partialWarningElement(),'<span class="citations-formatted" style="word-wrap: break-word;"></span>',"</div>",'<div class="citations-bibtex toolFormBody" style="padding:5px 10px">','<textarea style="width: 100%; height: 500px;" class="citations-bibtex-text"></textarea>',"</div>","</div>"].join("")}});t.default={CitationView:a,CitationListView:r}});
//# sourceMappingURL=../../../maps/mvc/citation/citation-view.js.map
