(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween64 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsAyQgPgUAAgeQAAgfARgTQASgTAYAAQAcAAAQAUQAQAUAAAdQAAAfgSAUQgRATgaAAQgbAAgQgUgAgagnQgKAMAAAbQAAAcAKANQALAMAPAAQAQAAAKgNQALgNAAgbQAAgbgLgMQgLgNgPAAQgPAAgLANg");
	this.shape.setTransform(76.625,593.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOAPIAAgdIAdAAIAAAdg");
	this.shape_1.setTransform(66.225,598.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag+BcIAAgRIA2AAIAAiKQgYAZgZAOIAAgXQAjgSATgaIAQAAIAACmIAyAAIAAARg");
	this.shape_2.setTransform(55.8,590.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAiBEIAAhUQAAgSgJgIQgIgHgLgBQgPAAgLANQgLANABAUIAABIIgWAAIAAiEIAUAAIAAAZQAQgcAZgBQAPAAALAJQAKAHAEAKQADAJABAaIAABLg");
	this.shape_3.setTransform(32.9,593.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgsAyQgPgUAAgeQAAgfARgTQASgTAYAAQAcAAAQAUQAQAUAAAdQAAAfgSAUQgRATgaAAQgbAAgQgUgAgagnQgKAMAAAbQAAAcAKANQALAMAPAAQAQAAAKgNQALgNAAgbQAAgbgLgMQgLgNgPAAQgPAAgLANg");
	this.shape_4.setTransform(18.575,593.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKBaIAAiEIAVAAIAACEgAgKhCIAAgXIAVAAIAAAXg");
	this.shape_5.setTransform(8.45,591.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag4AgIAUgEQAGAZAiAAQANAAAJgFQAJgGAAgLQAAgQgXgEIgbgFQgRgDgJgIQgKgKAAgPQAAgRANgLQAOgLAWAAQArAAAKAiIgTAEQgJgVgXAAQgNAAgJAFQgHAFgBAKQABAPAUADIAZAFQApAHAAAfQAAATgQALQgOALgZAAQgvAAgLgmg");
	this.shape_6.setTransform(-1.15,593.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggBEIAAiEIATAAIAAAgQAJgWAJgHQAKgGAKgBIAIABIAAATIgEAAQgRABgMANQgKAMgBAVIAABFg");
	this.shape_7.setTransform(-10.725,593.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgqAzQgRgTAAgfQAAgfASgTQARgUAaAAQAaAAAQASQAPASABAjIhgAAQAAAeANALQAMAKAOAAQAZAAAKgaIAUAEQgGARgPALQgPALgVAAQgaAAgRgTgAgXgqQgLALgBATIBIAAQAAgMgDgIQgEgJgIgGQgIgGgMAAQgOAAgLALg");
	this.shape_8.setTransform(-23.075,593.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgJBCIgwiEIAXAAIAlBrIAkhrIATAAIgvCEg");
	this.shape_9.setTransform(-36.175,593.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag4BbIAAixIATAAIAAAaQAOgeAbAAQAYAAAOAUQAPATAAAfQAAAggPASQgPATgXAAQgYABgPgYIAABBgAgWg+QgKAKgDANIAAAlQACAPALAJQALAKALAAQANAAALgLQAKgMAAgdQAAgZgJgNQgKgOgPAAQgMAAgKAKg");
	this.shape_10.setTransform(-55.675,595.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag4BbIAAixIATAAIAAAaQAOgeAbAAQAYAAAOAUQAPATAAAfQAAAggPASQgPATgXAAQgYABgPgYIAABBgAgWg+QgKAKgDANIAAAlQACAPALAJQALAKALAAQANAAALgLQAKgMAAgdQAAgZgJgNQgKgOgPAAQgMAAgKAKg");
	this.shape_11.setTransform(-70.075,595.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgtA7QgMgMAAgRQAAgUARgMQARgNApAAIARAAQAAgPgDgHQgCgIgIgEQgHgEgNAAQgfAAgFAYIgTgDQAGglAzAAQAcAAALAMQAMAMAAAeIAAA4QAAAOADAMIgUAAQgCgHgBgRQgNAbghAAQgWAAgMgLgAgWAHQgNAIAAAQQAAAKAHAHQAIAGAOAAQARAAAMgNQANgOAAgSIgBgJIgTAAQgYAAgOAHg");
	this.shape_12.setTransform(-85.4,593.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgOAPIAAgdIAdAAIAAAdg");
	this.shape_13.setTransform(-95.475,598.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag0BYIAAgRQAIACAGAAQAKAAAGgFQAHgGAHgWIguiBIAVAAIAiBjIAlhjIARAAIg1CTQgLAggZAAQgIAAgKgCg");
	this.shape_14.setTransform(-104.325,595.775);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgtA7QgMgMAAgRQAAgUARgMQARgNApAAIARAAQAAgPgDgHQgCgIgIgEQgHgEgOAAQgeAAgFAYIgTgDQAGglAzAAQAcAAAMAMQALAMAAAeIAAA4QAAAOADAMIgVAAQgBgHgBgRQgOAbgfAAQgXAAgMgLgAgWAHQgNAIAAAQQAAAKAIAHQAGAGAOAAQATAAALgNQAMgOABgSIgBgJIgTAAQgYAAgOAHg");
	this.shape_15.setTransform(-117.6,593.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(0,0,51,0.376)").ss(1,1,1).p("A/2jvMA/tAAAQBTAAA7A7QA6A6AABTIAABPQAABTg6A7Qg7A6hTAAMg/tAAAQhTAAg7g6Qg6g7AAhTIAAhPQAAhTA6g6QA7g7BTAAg");
	this.shape_16.setTransform(-20.325,593.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000099").s().p("EgjCBgdQhTAAg6g7Qg6g6gBhTIAAhQQABhTA6g7QA6g6BTAAMA/uAAAQBTAAA6A6QA7A7AABTIAABQQAABTg7A6Qg6A7hTAAgEg4PADjMAAAhj/MBwfAAAMAAABj/g");
	this.shape_17.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-360,-617.2,720,1235.5);


(lib.Tween63 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsAyQgPgUAAgeQAAgfARgTQASgTAYAAQAcAAAQAUQAQAUAAAdQAAAfgSAUQgRATgaAAQgbAAgQgUgAgagnQgKAMAAAbQAAAcAKANQALAMAPAAQAQAAAKgNQALgNAAgbQAAgbgLgMQgLgNgPAAQgPAAgLANg");
	this.shape.setTransform(76.625,593.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOAPIAAgdIAdAAIAAAdg");
	this.shape_1.setTransform(66.225,598.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag+BcIAAgRIA2AAIAAiKQgYAZgZAOIAAgXQAjgSATgaIAQAAIAACmIAyAAIAAARg");
	this.shape_2.setTransform(55.8,590.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAiBEIAAhUQAAgSgJgIQgIgHgLgBQgPAAgLANQgLANABAUIAABIIgWAAIAAiEIAUAAIAAAZQAQgcAZgBQAPAAALAJQAKAHAEAKQADAJABAaIAABLg");
	this.shape_3.setTransform(32.9,593.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgsAyQgPgUAAgeQAAgfARgTQASgTAYAAQAcAAAQAUQAQAUAAAdQAAAfgSAUQgRATgaAAQgbAAgQgUgAgagnQgKAMAAAbQAAAcAKANQALAMAPAAQAQAAAKgNQALgNAAgbQAAgbgLgMQgLgNgPAAQgPAAgLANg");
	this.shape_4.setTransform(18.575,593.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKBaIAAiEIAVAAIAACEgAgKhCIAAgXIAVAAIAAAXg");
	this.shape_5.setTransform(8.45,591.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag4AgIAUgEQAGAZAiAAQANAAAJgFQAJgGAAgLQAAgQgXgEIgbgFQgRgDgJgIQgKgKAAgPQAAgRANgLQAOgLAWAAQArAAAKAiIgTAEQgJgVgXAAQgNAAgJAFQgHAFgBAKQABAPAUADIAZAFQApAHAAAfQAAATgQALQgOALgZAAQgvAAgLgmg");
	this.shape_6.setTransform(-1.15,593.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggBEIAAiEIATAAIAAAgQAJgWAJgHQAKgGAKgBIAIABIAAATIgEAAQgRABgMANQgKAMgBAVIAABFg");
	this.shape_7.setTransform(-10.725,593.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgqAzQgRgTAAgfQAAgfASgTQARgUAaAAQAaAAAQASQAPASABAjIhgAAQAAAeANALQAMAKAOAAQAZAAAKgaIAUAEQgGARgPALQgPALgVAAQgaAAgRgTgAgXgqQgLALgBATIBIAAQAAgMgDgIQgEgJgIgGQgIgGgMAAQgOAAgLALg");
	this.shape_8.setTransform(-23.075,593.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgJBCIgwiEIAXAAIAlBrIAkhrIATAAIgvCEg");
	this.shape_9.setTransform(-36.175,593.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag4BbIAAixIATAAIAAAaQAOgeAbAAQAYAAAOAUQAPATAAAfQAAAggPASQgPATgXAAQgYABgPgYIAABBgAgWg+QgKAKgDANIAAAlQACAPALAJQALAKALAAQANAAALgLQAKgMAAgdQAAgZgJgNQgKgOgPAAQgMAAgKAKg");
	this.shape_10.setTransform(-55.675,595.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag4BbIAAixIATAAIAAAaQAOgeAbAAQAYAAAOAUQAPATAAAfQAAAggPASQgPATgXAAQgYABgPgYIAABBgAgWg+QgKAKgDANIAAAlQACAPALAJQALAKALAAQANAAALgLQAKgMAAgdQAAgZgJgNQgKgOgPAAQgMAAgKAKg");
	this.shape_11.setTransform(-70.075,595.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgtA7QgMgMAAgRQAAgUARgMQARgNApAAIARAAQAAgPgDgHQgCgIgIgEQgHgEgNAAQgfAAgFAYIgTgDQAGglAzAAQAcAAALAMQAMAMAAAeIAAA4QAAAOADAMIgUAAQgCgHgBgRQgNAbghAAQgWAAgMgLgAgWAHQgNAIAAAQQAAAKAHAHQAIAGAOAAQARAAAMgNQANgOAAgSIgBgJIgTAAQgYAAgOAHg");
	this.shape_12.setTransform(-85.4,593.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgOAPIAAgdIAdAAIAAAdg");
	this.shape_13.setTransform(-95.475,598.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag0BYIAAgRQAIACAGAAQAKAAAGgFQAHgGAHgWIguiBIAVAAIAiBjIAlhjIARAAIg1CTQgLAggZAAQgIAAgKgCg");
	this.shape_14.setTransform(-104.325,595.775);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgtA7QgMgMAAgRQAAgUARgMQARgNApAAIARAAQAAgPgDgHQgCgIgIgEQgHgEgOAAQgeAAgFAYIgTgDQAGglAzAAQAcAAAMAMQALAMAAAeIAAA4QAAAOADAMIgVAAQgBgHgBgRQgOAbgfAAQgXAAgMgLgAgWAHQgNAIAAAQQAAAKAIAHQAGAGAOAAQATAAALgNQAMgOABgSIgBgJIgTAAQgYAAgOAHg");
	this.shape_15.setTransform(-117.6,593.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(0,0,51,0.376)").ss(1,1,1).p("A/2jvMA/tAAAQBTAAA7A7QA6A6AABTIAABPQAABTg6A7Qg7A6hTAAMg/tAAAQhTAAg7g6Qg6g7AAhTIAAhPQAAhTA6g6QA7g7BTAAg");
	this.shape_16.setTransform(-20.325,593.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000099").s().p("EgjCBgdQhTAAg6g7Qg6g6gBhTIAAhQQABhTA6g7QA6g6BTAAMA/uAAAQBTAAA6A6QA7A7AABTIAABQQAABTg7A6Qg6A7hTAAgEg4PADjMAAAhj/MBwfAAAMAAABj/g");
	this.shape_17.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-360,-617.2,720,1235.5);


(lib.Tween58 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("EAqggEwQgBgMAAgMQAAj5B7iwQB6iwCuAAQCtAAB7CwQB6CwAAD5QAADXhbCfQALAWAKAXQBHCbAqC3EA2JAAuQgOAagRAYQh7CwitAAQg0AAgvgQQg/AxhfAqQhVAmhgAZQA4AeAyAnQDpCxAAD6QAAAMAAAMA7YinQAhhcBLhLQCHiHC/AAQC+AACHCHQCHCHAAC+QAACshwB/QAZAgAXAmQA1BWAiBlQAfiaBFh9QB/jjCyAAQBBAAA6AeQAgh0AvhpQCXlTDUAAQDCAACOEZQAOAcANAeQCXFSAAHfQAACKgMB9Eg4OgFTQCsimDRAAQFUAADwG3QAaAvAXAxQAJgPAKgNQDNkPEhAAQCxAACSBmEgq4AOiQgdh/AAiPQAAluC5kIAtYOiQgFg3AAg8QAAiQAah8AluOiQgNh9AAiKQAAlMBIkIA5IFcQgSgPgSgSQiGiHAAi9QAAhUAahKA7fOiQAAgBAAgCQAAlMCPjrQAEgGAEgGQCOjfDFAAQCrAACAClAS1khQgFglAAgnQAAjhCfigQCfifDiAAQDhAACfCfQCfCeABDgQAAABAAACQAADiigCeQhdBdh0AmQApBLAABVQAAAPgBAQQCEgmCZAAQECAADGBrEAjwgFwQDuAIDCA4AHXjQQDEiNDzAAQCdAACKA8QC4BPCWC6QBLBdA1BoQBlDHAYDvQAHBJAABMQAABYgJBSAd/CWQhSAchdAAQgoAAglgFAenFVQgOCaiZB0EAvfAEAQhvgkhWh8Qh1imgFjq");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EAvfAOiIAAgYQAAj6jpixQgygng4gdQBggbBVglQBfgrA/gvQg/AvhfArQhVAlhgAbQA4AdAyAnQDpCxAAD6IAAAYIzhAAQAJhSAAhYQAAhMgHhJQAHBJAABMQAABYgJBSIyBAAQAMh9AAiKQAAnfiXlTIgbg5QDEiMDzgBQCdAACKA8QgFglAAgnQAAjiCfifQCfifDiAAQDhAACfCfQCfCfABDfIAAADQAADiigCdQhdBeh0AmQB0gmBdheQCgidAAjiIAAgDQDuAIDCA4QAFDpB1CnQBWB8BvAlQhvglhWh8Qh1ingFjpIgBgYQAAj5B7iwQB6iwCuAAQCtAAB7CwQB6CwAAD5QAADXhbCfIAVAtQBHCbAqC3IAAH1gAcAJjQCZh0AOiaQCEgmCZAAQECAADGBsQjGhskCAAQiZAAiEAmQgOCaiZB0QgYjvhljHQAlAFAoAAQBdAABSgcQApBKAABWIgBAfIABgfQAAhWgphKQhSAchdAAQgoAAglgFQg1hohLhcQiWi7i4hPQC4BPCWC7QBLBcA1BoQBlDHAYDvIAAAAgEAxCAEQQCtAAB7iwQARgYAOgaQgOAagRAYQh7CwitAAQg0AAgvgPQAvAPA0AAgAJ9OiIvrAAQgNh9AAiKQAAlMBIkIQAgh1AvhpQCXlSDUAAQDCAACOEZIAbA5QCXFTAAHfQAACKgMB9gAtYOiQgFg4AAg6QAAiRAah8QgaB8AACRQAAA6AFA4IuHAAIAAgDQAAlMCPjsIAIgLQCOjgDFAAQCrABCAClQiAilirgBQjFAAiODgIgIALQiPDsAAFMIAAADIvZAAQgdh/AAiPQAAlvC5kHQi5EHAAFvQAACPAdB/ItWAAIAAz1QCsimDRgBQFUABDwG3QAaAvAXAxIATgcQDNkPEhgBQCxAACSBoQAhhdBLhLQCHiHC/AAQC+AACHCHQCHCHAAC+QAACshwB/QAZAgAXAlQA1BYAiBkQAfiaBFh9QB/jiCyAAQBBAAA6AdQhIEIAAFMQAACKANB9gA7ygJQAAC+CGCGQASASASAPQgSgPgSgSQiGiGAAi+QAAhUAahJQgaBJAABUIAAAAg");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-360.8,-94,721.7,188);


(lib.Tween57 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AHXjQQAOAbANAeQCXFTAAHfQAACKgMB9AkzBIQAgh2AvhpQCXlSDUAAQDCAACOEZQDEiNDzAAQCdAACKA8QgFglAAgnQAAjiCfifQCfifDiAAQDhAACfCfQCfCeABDgQAAABAAACQAADhigCfQhdBdh0AnQhSAbhdAAQgoAAglgFQBlDHAYDvQAHBJAABMQAABYgJBSAS1khQC4BPCWC6QBLBdA1BoEAqggEwQgBgMAAgMQAAj5B7iwQB6iwCuAAQCtAAB7CwQB6CwAAD5QAADXhbCgQgOAZgRAYQh7CwitAAQg0AAgvgPQhvglhWh8Qh1ingFjpgEAjwgFwQDuAIDCA4EA2JAAvQALAVAKAXQBHCcAqC2EAvfAEBQg/AwhfAqQhVAmhgAaQA4AeAyAmQDpCxAAD6QAAAMAAAMAd/CXQApBKAABVQAAAQgBAPQgOCaiZB0AenFVQCEgmCZAAQECAADGBsEg4OgFTQCsinDRAAQFUAADwG4QAaAvAXAxQAJgOAKgOQDNkQEhAAQCxAACSBnQAhhcBLhMQCHiGC/AAQC+AACHCGQCHCHAAC/QAACshwB/QAZAgAXAmQA1BXAiBkQAfiaBFh9QB/jiCyAAQBBAAA6AeA5IFcQgSgPgSgSQiGiGAAi+QAAhUAahKAluOiQgNh9AAiKQAAlLBIkIA7fOiQAAgBAAgCQAAlMCPjrQAEgGAEgGQCOjfDFAAQCrAACAClAtYOiQgFg3AAg7QAAiQAah9Egq4AOiQgdh/AAiPQAAluC5kI");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EAvfAOiIAAgYQAAj6jpixQgygng4geQBggaBVglQBfgrA/gwQhvglhWh7Qh1ingFjpQAFDpB1CnQBWB7BvAlQg/AwhfArQhVAlhgAaQA4AeAyAnQDpCxAAD6IAAAYIzhAAQAJhSAAhYQAAhMgHhJQCZh0AOiaQCEgnCZAAQECAADGBsQjGhskCAAQiZAAiEAnIABgfQAAhVgphLQhSAchdAAQgoAAglgFQBlDHAYDvQAHBJAABMQAABYgJBSIyBAAIvrAAQgNh+AAiJQAAlLBIkJQhIEJAAFLQAACJANB+InqAAIuHAAIAAgDQAAlNCPjrIAIgMQCOjeDFgBQCrAACACmQiAimirAAQjFABiODeQgSgPgSgRQiGiHAAi9QAAhUAahJQgaBJAABUQAAC9CGCHQASARASAPIgIAMQiPDrAAFNIAAADIvZAAQgdiAAAiOQAAlvC5kHIATgcQDNkQEhAAQCxAACSBoQAhhdBLhMQCHiGC/AAQC+AACHCGQCHCIAAC+QAACshwB/QAZAgAXAlQA1BXAiBlQgaB8AACQQAAA7AFA4QgFg4AAg7QAAiQAah8QAfiaBFh9QB/jjCyAAQBBAAA6AeQAgh1AvhoQCXlTDUAAQDCAACOEZIAbA6QCXFSAAHfQAACJgMB+QAMh+AAiJQAAnfiXlSIgbg6QDEiMDzAAQCdgBCKA8QgFglAAgnQAAjiCfifQCfifDiAAQDhAACfCfQCfCeABDhIAAACQAADiigCeQhdBdh0AmQB0gmBdhdQCgieAAjiIAAgCQDuAHDCA4IgBgYQAAj5B7iwQB6iwCuAAQCtAAB7CwQB6CwAAD5QAADXhbCgQgOAZgRAYQh7CwitAAQg0AAgvgQQAvAQA0AAQCtAAB7iwQARgYAOgZIAVAsQBHCcAqC1IAAH2gAYDgXQBLBcA1BoQg1hohLhcQiWi7i4hPQC4BPCWC7gEg4OAOiIAAz1QCsimDRgBQFUAADwG4QAaAvAXAxQi5EHAAFvQAACOAdCAgAcAJjQgYjvhljHQAlAFAoAAQBdAABSgcQApBLAABVIgBAfQgOCaiZB0IAAAAgA5IFbIAAAAgAHXjQIAAAAg");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-360.8,-94,721.7,188);


(lib.Tween56 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000099").ss(6,1,1).p("EgtaAAAMBa1AAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-293.7,-3,587.4,6);


(lib.Tween55 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000099").ss(6,1,1).p("EgtaAAAMBa1AAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-293.7,-3,587.4,6);


(lib.Tween35 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("ACTDEIiTkYIiVEYIgLAAIjGmHIA9AAICOEcICVkcIAJAAICWEcICRkcIA+AAIjLGHg");
	this.shape.setTransform(-5.65,8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.3,-47.7,92.69999999999999,95.5);


(lib.Tween34 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("ACTDEIiTkYIiVEYIgLAAIjGmHIA9AAICOEcICVkcIAJAAICWEcICRkcIA+AAIjLGHg");
	this.shape.setTransform(-5.65,8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.3,-47.7,92.69999999999999,95.5);


(lib.Tween33 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AivCQQhAhAAAhPQAAhJA2g7QBFhKB0AAQB2gBBGBMQAzA2ABBQImhAAQABBFAyArQAyAsBKAAQAjAAAhgLQAigKAXgRQAYgRAbgnIAyAWQgYApghAaQggAZgpANQgoANg0AAQhxABhAg/gAh1h4QgkAbgSA2IFZAAQgMgogXgYQgXgYglgPQgmgPgpAAQhEAAgxAlg");
	this.shape.setTransform(-5.725,8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.4,-47.7,76.9,95.5);


(lib.Tween32 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AivCQQhAhAAAhPQAAhJA2g7QBFhKB0AAQB2gBBGBMQAzA2ABBQImhAAQABBFAyArQAyAsBKAAQAjAAAhgLQAigKAXgRQAYgRAbgnIAyAWQgYApghAaQggAZgpANQgoANg0AAQhxABhAg/gAh1h4QgkAbgSA2IFZAAQgMgogXgYQgXgYglgPQgmgPgpAAQhEAAgxAlg");
	this.shape.setTransform(-5.725,8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.4,-47.7,76.9,95.5);


(lib.Tween31 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AgdEQIAAofIA7AAIAAIfg");
	this.shape.setTransform(-5.65,0.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.7,-47.7,37.5,95.5);


(lib.Tween30 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AgdEQIAAofIA7AAIAAIfg");
	this.shape.setTransform(-5.65,0.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.7,-47.7,37.5,95.5);


(lib.Tween29 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AitCRQhEg9AAhTQAAhRBAg7QBHhCBqAAQBrAABHBCQBAA7AABRQAABThEA9QhDA+hrgBQhqABhDg+gAh/huQg2AvAABCQAAAqAZAlQAYAkAqAVQApATAxAAQAyAAApgTQAqgVAYgkQAZglAAgqQAAhCg2gvQg2guhKAAQhKAAg1Aug");
	this.shape.setTransform(-5.675,8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.6,-47.7,77.30000000000001,95.5);


(lib.Tween28 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AitCRQhEg9AAhTQAAhRBAg7QBHhCBqAAQBrAABHBCQBAA7AABRQAABThEA9QhDA+hrgBQhqABhDg+gAh/huQg2AvAABCQAAAqAZAlQAYAkAqAVQApATAxAAQAyAAApgTQAqgVAYgkQAZglAAgqQAAhCg2gvQg2guhKAAQhKAAg1Aug");
	this.shape.setTransform(-5.675,8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.6,-47.7,77.30000000000001,95.5);


(lib.Tween27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AEeDJIAAjVQAAg/gKgXQgLgZgagOQgZgPgkAAQgsABgjAVQgkAWgRAkQgRAkAABTIAACaIg6AAIAAjIQAAhGgLgaQgKgagagPQgagQgkAAQgqAAgjAWQglAVgRAkQgRAjAABJIAACmIg8AAIAAmHIA8AAIAABDQAfglAhgSQAtgXAyABQAigBAeAMQAfALATASQASATAOAjQAeguAsgYQAtgYA0AAQAwAAAlAUQAlAUASAlQARAmAABJIAADVg");
	this.shape.setTransform(-5.325,7.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-47.7,102.1,95.5);


(lib.Tween26 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AEeDJIAAjVQAAg/gKgXQgLgZgagOQgZgPgkAAQgsABgjAVQgkAWgRAkQgRAkAABTIAACaIg6AAIAAjIQAAhGgLgaQgKgagagPQgagQgkAAQgqAAgjAWQglAVgRAkQgRAjAABJIAACmIg8AAIAAmHIA8AAIAABDQAfglAhgSQAtgXAyABQAigBAeAMQAfALATASQASATAOAjQAeguAsgYQAtgYA0AAQAwAAAlAUQAlAUASAlQARAmAABJIAADVg");
	this.shape.setTransform(-5.325,7.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-47.7,102.1,95.5);


(lib.Tween25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AivCQQhAhAAAhPQAAhJA2g7QBFhKB0AAQB2gBBGBMQAzA2ABBQImhAAQABBFAyArQAyAsBKAAQAjAAAhgLQAigKAXgRQAYgRAbgnIAyAWQgYApghAaQggAZgpANQgoANg0AAQhxABhAg/gAh1h4QgkAbgSA2IFZAAQgMgogXgYQgXgYglgPQgmgPgpAAQhEAAgxAlg");
	this.shape.setTransform(-5.725,8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.4,-47.7,76.9,95.5);


(lib.Tween24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AivCQQhAhAAAhPQAAhJA2g7QBFhKB0AAQB2gBBGBMQAzA2ABBQImhAAQABBFAyArQAyAsBKAAQAjAAAhgLQAigKAXgRQAYgRAbgnIAyAWQgYApghAaQggAZgpANQgoANg0AAQhxABhAg/gAh1h4QgkAbgSA2IFZAAQgMgogXgYQgXgYglgPQgmgPgpAAQhEAAgxAlg");
	this.shape.setTransform(-5.725,8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.4,-47.7,76.9,95.5);


(lib.Tween23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AijCUQhIg8AAhUQAAg4AigyQAhgxA8gbQA7gbBJAAQAuAAArAMQAqAMAeASQAeAUAVAeIgvAYQg+hFhqAAQhUAAg4AuQg4AvAABBQAAArAaAlQAaAmAtAVQAtAVA2AAQBnAABBhFIAvAbQghAqg4AXQg4AXhIAAQhtAAhJg6g");
	this.shape.setTransform(-5.875,8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.3,-47.7,76.69999999999999,95.5);


(lib.Tween22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AijCUQhIg8AAhUQAAg4AigyQAhgxA8gbQA7gbBJAAQAuAAArAMQAqAMAeASQAeAUAVAeIgvAYQg+hFhqAAQhUAAg4AuQg4AvAABBQAAArAaAlQAaAmAtAVQAtAVA2AAQBnAABBhFIAvAbQghAqg4AXQg4AXhIAAQhtAAhJg6g");
	this.shape.setTransform(-5.875,8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.3,-47.7,76.69999999999999,95.5);


(lib.buton_instagram = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000099").s().p("ABFBEIAAhSQAAgMgCgGQgBgHgHgFQgHgFgJgBQgMAAgKALQgMALAAAXIAABJIgTAAIAAhWQAAgRgIgIQgIgHgKAAQgNAAgKALQgJAMAAARIAABOIgUAAIAAiEIASAAIAAAaQAPgdAaAAQAOAAAKAJQAJAJADAOQAOghAcABQAOgBAKAJQAKAHADALQADAKAAARIAABSg");
	this.shape.setTransform(141.325,19.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000099").s().p("AgtA7QgMgMAAgRQAAgUARgMQARgNAoAAIASAAQAAgPgCgHQgDgIgHgEQgJgEgMAAQgfAAgFAYIgUgDQAIglAzAAQAbAAALAMQAMAMAAAeIAAA4QAAAOADAMIgUAAQgCgHgBgRQgNAbghAAQgWAAgMgLgAgVAHQgOAIAAAQQAAAKAHAHQAIAGAOAAQARAAAMgNQAMgOAAgSIAAgJIgTAAQgXAAgOAHg");
	this.shape_1.setTransform(122.75,20.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000099").s().p("AggBEIAAiEIATAAIAAAgQAJgWAJgHQAKgGAKAAIAIAAIAAATIgEAAQgRABgMANQgKAMgBAVIAABFg");
	this.shape_2.setTransform(112.475,19.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000099").s().p("AgwBcQgPgJAAgQQAAgTAUgIQgNgIAAgNQAAgQATgHQgRgNAAgWQAAgTAOgNQAPgNAVAAQAOAAANAGQACgNAHgFQAHgFAPAAIAFAAIAAAQQgPAAgEAEQgFADgCAIQANAPAAASQAAASgOANQgOAMgWAAIgJAAIgJgCQgEAAgFAEQgFADAAAGQAAAHAHADQAIACAZAAQAXABALADQALACAHAJQAIAIAAAMQAAAmhCAAQggAAgOgKgAgrBBQAAAKAMAGQAMAFASABQARgBAOgFQAOgEAAgMQAAgGgEgEQgEgEgIgBIgZgCQgVAAgKgCQgPAHAAAMgAgYg8QgJAIAAAPQAAAMAIAIQAIAJANAAQANAAAIgJQAIgIAAgNQAAgNgIgJQgJgIgLAAQgMAAgJAIg");
	this.shape_3.setTransform(100.975,21.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000099").s().p("AgtA7QgMgMAAgRQAAgUARgMQARgNAoAAIASAAQAAgPgDgHQgCgIgHgEQgJgEgMAAQgfAAgFAYIgUgDQAIglAzAAQAbAAALAMQAMAMAAAeIAAA4QAAAOADAMIgUAAQgCgHgBgRQgNAbghAAQgWAAgMgLgAgVAHQgOAIAAAQQAAAKAHAHQAIAGAOAAQARAAANgNQALgOAAgSIAAgJIgTAAQgXAAgOAHg");
	this.shape_4.setTransform(86.3,20.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000099").s().p("AgQAuIAAhQIgYAAIAAgQIAYAAIABghIASgCIAAAjIAeAAIAAAQIgeAAIAABUQAAAUAVAAIAQgBIAAAPIgTACQglAAAAgog");
	this.shape_5.setTransform(75.35,18.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000099").s().p("Ag4AgIATgEQAHAZAiAAQANAAAJgFQAJgGAAgLQAAgQgXgEIgbgFQgQgDgKgIQgKgKAAgPQAAgRANgLQAOgLAWAAQAqAAALAiIgTAEQgJgVgYAAQgMAAgJAFQgIAFAAAKQAAAPAVADIAZAFQApAHAAAfQAAATgQALQgOALgZAAQgvAAgLgmg");
	this.shape_6.setTransform(64.8,20.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000099").s().p("AAiBEIAAhUQAAgSgJgIQgIgHgLgBQgPAAgLANQgKANAAAUIAABIIgWAAIAAiEIAUAAIAAAZQAQgcAZAAQAPgBAKAJQALAHAEAKQADAKABAZIAABLg");
	this.shape_7.setTransform(51.45,19.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000099").s().p("AgKBaIAAiEIAVAAIAACEgAgKhCIAAgXIAVAAIAAAXg");
	this.shape_8.setTransform(41.05,17.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(0,0,51,0.376)").ss(1,1,1).p("Aq7izIV3AAQBKAAA0A0QA2A1AABKQAABLg2A0Qg0A1hKAAI13AAQhKAAg1g1Qg1g0AAhLQAAhKA1g1QA1g0BKAAg");
	this.shape_9.setTransform(87.95,18.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Aq7C0QhKAAg1g1Qg1g0AAhLQAAhJA1g1QA1g1BKAAIV2AAQBLAAA1A1QA0A1AABJQAABLg0A0Qg1A1hLAAg");
	this.shape_10.setTransform(87.95,18.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.buton_instagram, new cjs.Rectangle(-1,-0.2,177.9,38), null);


(lib.buton_github = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000099").s().p("AgnBCIgHAWIgKAAIAAizIAVAAIAABFQAOgaAYAAQAXAAAPASQAQATAAAhQAAAegPAUQgPAUgYAAQgbAAgPgagAgWgUQgLALgCAPIAAAeQABAVAMAJQALAJALAAQAQAAAJgOQAKgNAAgYQABgZgKgPQgKgOgQAAQgMAAgKAKg");
	this.shape.setTransform(92.7,17.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000099").s().p("AgnA3QgNgNAAgZIAAhUIAWAAIAABUQgBATAJAIQAIAHAKAAQAJAAAIgFQAIgGAFgKQAGgLAAgMIAAhKIAUAAIAACEIgSAAIAAgaQgPAdgbAAQgUAAgLgNg");
	this.shape_1.setTransform(77.65,20.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000099").s().p("AAgBaIAAhRQAAgNgCgHQgCgIgGgEQgHgFgJgBQgPAAgLAOQgKAMAAAWIAABHIgVAAIAAizIAVAAIAABIQAOgdAZAAQAMAAAJAFQAJAEAFAIQAFAHACAIQABAHAAAQIAABRg");
	this.shape_2.setTransform(63.025,17.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000099").s().p("AgQAuIAAhQIgYAAIAAgQIAYAAIABghIASgCIAAAjIAeAAIAAAQIgeAAIAABUQAAAUAVAAIAQgBIAAAPIgTACQglAAAAgog");
	this.shape_3.setTransform(51.5,18.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000099").s().p("AgKBaIAAiEIAUAAIAACEgAgKhCIAAgXIAVAAIAAAXg");
	this.shape_4.setTransform(44.35,17.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000099").s().p("AgwBcQgPgJAAgQQAAgTAUgIQgNgIAAgNQAAgQATgHQgRgNAAgWQAAgTAOgNQAPgNAVAAQAOAAANAGQACgNAHgFQAHgFAPAAIAFAAIAAAQQgPAAgEAEQgFADgCAIQANAPAAASQAAASgOANQgOAMgWAAIgJAAIgJgCQgEAAgFAEQgFADAAAGQAAAHAHADQAIACAZAAQAXABALADQALACAHAJQAIAIAAAMQAAAmhCAAQggAAgOgKgAgrBBQAAAKAMAGQAMAFASABQARgBAOgFQAOgEAAgMQAAgGgEgEQgEgEgIgBIgZgCQgVAAgKgCQgPAHAAAMgAgYg8QgJAIAAAPQAAAMAIAIQAIAJANAAQANAAAIgJQAIgIAAgNQAAgNgIgJQgJgIgLAAQgMAAgJAIg");
	this.shape_5.setTransform(35.075,21.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(0,0,51,0.376)").ss(1,1,1).p("AobifIQ3AAQBCAAAvAvQAvAvAABBQAABCgvAvQgvAvhCAAIw3AAQhCAAgvgvQgvgvAAhCQAAhBAvgvQAvgvBCAAg");
	this.shape_6.setTransform(69.975,18.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AobCgQhCAAgvgvQgvgvAAhCQAAhBAvgvQAvgvBCAAIQ3AAQBCAAAvAvQAvAvAABBQAABCgvAvQgvAvhCAAg");
	this.shape_7.setTransform(69.975,18.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.buton_github, new cjs.Rectangle(-1,0,142,35.8), null);


(lib.buton_facebook = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000099").s().p("AAhBaIglhLIgdAiIAAApIgVAAIAAizIAVAAIAAByIA9hDIAWAAIgqAuIAvBWg");
	this.shape.setTransform(109.1,20.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000099").s().p("AgsAyQgPgUAAgeQAAgfARgTQASgTAYAAQAcAAAQAUQAQAUAAAdQAAAfgSAUQgRATgaAAQgbAAgQgUgAgagnQgKAMAAAbQAAAcAKANQALAMAPAAQAQAAAKgNQALgNAAgbQAAgbgLgMQgLgNgPAAQgPAAgLANg");
	this.shape_1.setTransform(94.525,22.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000099").s().p("AgnBCIgHAWIgKAAIAAizIAVAAIAABFQAOgaAYAAQAXAAAPASQAQATAAAhQAAAegPAUQgPAUgYAAQgbAAgPgagAgXgUQgKALgCAPIAAAeQABAVALAJQALAJAMAAQAQAAAKgOQAJgNABgYQAAgZgKgPQgKgOgQAAQgMAAgLAKg");
	this.shape_2.setTransform(80.75,20.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000099").s().p("AgqAzQgRgTAAgfQAAgfASgTQARgUAaAAQAaAAAQASQAPASABAjIhgAAQAAAeANALQAMAKAOAAQAZAAAKgaIAUAEQgGARgPALQgPALgVAAQgaAAgRgTgAgXgqQgLALgBATIBIAAQAAgMgDgIQgEgJgIgGQgIgGgMAAQgOAAgLALg");
	this.shape_3.setTransform(65.975,22.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000099").s().p("AgmAyQgPgUAAgdQAAgeAPgUQAPgUAaAAQAVAAAOANQANANADAUIgTAEQgFghgbAAQgQAAgJAPQgJAOAAAXQAAAZAJAOQAJAOAQAAQAZAAAHghIATADQgEAWgOANQgNAMgVAAQgaAAgOgUg");
	this.shape_4.setTransform(52.775,22.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000099").s().p("AgtA7QgMgMAAgRQAAgUARgMQARgNApAAIARAAQAAgPgCgHQgDgIgHgEQgJgEgNAAQgeAAgFAYIgUgDQAIglAzAAQAbAAAMAMQALAMAAAeIAAA4QAAAOADAMIgVAAQgBgHgBgRQgOAbgfAAQgXAAgMgLgAgVAHQgOAIAAAQQAAAKAIAHQAGAGAOAAQATAAAMgNQAMgOgBgSIAAgJIgTAAQgXAAgOAHg");
	this.shape_5.setTransform(38.75,22.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000099").s().p("AgSBcIAAh0IgWAAIAAgQIAWAAQABggAMgKQAKgJARAAIATACIAAAQIgMgBQgOAAgGAGQgHAGAAAQIAAAGIAgAAIAAAQIggAAIAAB0g");
	this.shape_6.setTransform(28.175,19.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(0,0,51,0.376)").ss(1,1,1).p("Anzi9IPnAAQBOAAA4A3QA4A4AABOQAABPg4A3Qg4A4hOAAIvnAAQhOAAg4g4Qg4g3AAhPQAAhOA4g4QA4g3BOAAg");
	this.shape_7.setTransform(68.975,19);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AnzC+QhOAAg4g4Qg4g3AAhPQAAhOA4g3QA4g4BOAAIPnAAQBOAAA4A4QA4A3AABOQAABPg4A3Qg4A4hOAAg");
	this.shape_8.setTransform(68.975,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.buton_facebook, new cjs.Rectangle(-1,-1,140,40), null);


(lib.btn_portofolio = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhkCcQgjg2ABhmQgBjQCHAAQBCAAAjA1QAiA0AABnQAADRiHAAQhCAAgig1gAgkhsQgMAbAABRQAABQAMAcQALAcAZAAQAZAAAMgbQAMgbAAhSQAAhRgMgbQgMgbgZgBQgYABgMAbg");
	this.shape.setTransform(322.6,45.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoDLIAAmVIBRAAIAAGVg");
	this.shape_1.setTransform(299.25,45.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhkDLIAAmVIBSAAIAAFJIB3AAIAABMg");
	this.shape_2.setTransform(281.425,45.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhlCcQghg2gBhmQAAjQCHAAQBCAAAjA1QAjA0AABnQAADRiIAAQhCAAgjg1gAglhsQgLAbAABRQAABQALAcQAMAcAZAAQAaAAAMgbQALgbAAhSQAAhRgLgbQgMgbgagBQgZABgMAbg");
	this.shape_3.setTransform(252,45.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhuDLIAAmVIDdAAIAABGIiLAAIAABqIBrAAIAABEIhrAAIAAChg");
	this.shape_4.setTransform(225.525,45.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgpDLIAAlJIhKAAIAAhMIDoAAIAABMIhNAAIAAFJg");
	this.shape_5.setTransform(200,45.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAqDLIgxihIgpAAIAAChIhSAAIAAmVIB1AAQAhAAATAEQASADASAPQATAPALAaQAKAaAAAgQAABMg1AeIBFCygAgwgWIAkAAQAvAAAAg7QAAgUgHgNQgHgNgKgFQgJgEgRAAIghAAg");
	this.shape_6.setTransform(174.025,45.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhlCcQgig2AAhmQABjQCGAAQBCAAAjA1QAjA0gBBnQAADRiHAAQhCAAgjg1gAglhsQgLAbAABRQAABQALAcQAMAcAZAAQAaAAALgbQAMgbAAhSQAAhRgMgbQgLgbgagBQgYABgNAbg");
	this.shape_7.setTransform(141.55,45.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ah6DLIAAmVIBrAAQAwAAAbAJQAbAJASAfQASAgAAAuQAAAtgOAdQgPAcgaANQgaANg2AAIgcAAIAACWgAgogQIAZAAQAhAAAKgRQAJgRAAgbQAAgXgHgOQgIgOgKgEQgKgEgRAAIgZAAg");
	this.shape_8.setTransform(113.05,45.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(0.4,1,1).p("AAAAAIAAAA");
	this.shape_9.setTransform(76.525,44.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(1,1,1).p("ACwggQAEgBAEAAQABAAABAAQAMAAAJAEQAIAEAAAFQAAAFgIADQgHAEgKAAQAFADAAAEQAAAEgLAEQgCABgEABQgJADgMABQAAAGgMAEQgHADgJABQgGAAgHAAQgRAAgMgEQgMgEAAgGQAAgFAKgEQgDgDAAgCQAAgFAHgDQgGgIAAgJQAAgOAMgJQAKgHAOgCAhIiTIAAAAQACgCACAAQADAAABACQACACAAACQAAADgCABQAAABAAAAQgCABgCAAQgCAAgCgCQgCgBAAgDQAAgCABgBgAhxikQAXACAQAOQABABABAAAg/hbQgBgBAAgBQgEgIAAgMQAAgMAEgJQAAgCABAAAhAiKQAAABABABQAEgHAFAAQAFAAAEAIQAFgCAFAAQAIAAAFADIjEhZQACACAAADQAAABAAABQAEAAAEADQABABABACQADgBADAAQAJAAAHAJIABAAAg8hsQgDgEAAgFQAAgIAIgGQAFgDAFgBAgNhoQgCAAgBABQgIAGgLAAQgMAAgIgGQgDgCgCgDAhEiJQAAAHgJAEQgJAFgNAAQgNAAgJgFQgJgEAAgHQAAgHAJgFQAJgFANAAQANAAAJAFQADABABACAgRiEIgCgBIgDgBAgRiEQABAAAAABQAIAFAAAIQAAABAAAAQAAAHgFAGAgIh2QADgBADAAQAEAAAEADQADADAAAEQAAABAAABQAAAFgDADQgEAEgEAAQgDAAgDgCQgBgBgBgBQgDgCAAgDAiCiaQgCgBgBgBQgDgDAAgFQAAgFADgDQAAAAAAgBQAEgDAFAAQAFAAACADQAEAEAAAFQAAAFgEADQgCADgFAAQgDAAgDgBQAAAKgDAIQAIAOAAASQAAAYgOARQgHAIgGAEQgKAFgKAAQgTAAgNgRQgFgHgDgHQgFgLAAgMQgCgCgCgEQgBgDgBgFQAAAKAAALQAAATAAAQQgBAOAAAMQgCAZgCAAQgCAAgCgYQAAAAAAgBQAAgQgBgTIAAAzQAAgHABgIAiijEQAKADAJAIQAGAGAEAHAi+iZIgBAAQgNAAgMgFQgBgBAAAAQgCgBgCgBQgCgBgCgCQAAAFABAGQABANAAAQQAAgGACgFQACgFADgBQAAAAABAAQADAAADAFQACgFADgEQACgDAEgCQgBAAgBAAQgJAAgHgIAiijEQAAAAABABQANAHAAAKQAAAKgNAHQAAABgBAAQgLAHgRAAQgEACgEABAjMjJQAHgBAGAAQAEAAAEAAQALABAKAFAiiigQANADAKAMQADAEADAFAiBguQAFgIAGgHQAXgaAggEIAAAAQAGgBAHAAQAXAAATALQANAHAMANQAZAdADAmAiBguQgNgBgKgEAiNAzQgGgRAAgUQAAgiASgaAgSBHQgFAAgFAAQgYAAgSgKQgRgJAAgOQAAgOARgKQASgKAYAAQAZAAAQAKQARAKAAAOQAAANgPAJQACAAACAAQAJAAAHABQAFABAFABQAHACADADQABABAAACQAAAFgLADQgKADgNAAQgBAAgCAAQgQAAgKgDQgLgDAAgFIAAAAQABgEAKgEQAJgCANgBAgIhhQAAAEAAAEQAAAEAAAEAg/hbQAAgJADgIAAJhtQADAAADAAQAcAAAUARQAGAGAFAGQAJAOAAASQAAAZgUASQgIAGgKAFQAAAEAAAEQAAAYgJAUQgBACAAABABiABQAAgBAAAAQAAgFAJgEQAIgEAMAAABZgJQAEgDAFgBQAMgEARAAQgBgDAAgCQAAgPAEgLQAEgHADgCQACgCADAAQAEAAAEAGQAEABADADQAGAEADAGQADAEABAEABVAEQABAAABgBQAFgBAGgBQAIgBAKAAQAIAAAGAAQgCgFgBgIQAAgCAAgCACmgnQAEABAFAEQAAABABABACdgWQACgEAGgDQACgBADgBQADgBADAAABKhQQAYADATARQABABABABQAEAAADAAQAGAAAFABACXAGQgEAHgFAAQgHAAgFgLQAAgBAAgBAC+gIQgCAAgCAAQgBAAgBAAQgLAAgIgEQgFgCgCgDIAAAAIgBgBIAAABIAAAAIABAAACdgSQAAgBAAgBQAAgBAAgBACbgEQACACAAACQAAAEgEADQAEADAAADACdgRQAAAHgCAGQgBAEgBACQgBACgBACQABAAABABACWg1QACACABADQAEALAAAPAjpjaQAAgDACgDQADgCAEAAIAAAAQADAAADACIAAABAjpjiIAAAIIAAABAjgjiIgJgEAjOjSQACADAAAFQAAAAAAABAjdjSQABABAAABQAAADgCACQgCACgDAAQgCAAgCgCQgBgBAAgCQgBgBAAAAIAAAEIAAABIAAAXIAAACIAAA7QABgUAAgPQABgKABgGQgDgEAAgEAjYjYQgBACgBACQgBABgCABQgBABgCAAQgEAAgDgDIAAAAQgCgDAAgCIAAAJIAAABAjji+QADgDADgCQAIgEAJgCAjpjQQAAgCACgCAjpjLQAAgBABgCAjji+QgBgBgBgBQgEgEAAgGAjYiNQgCgGAAgHQAAgDABgCAjhikQgDgCgCgDAjpizQAAgGAGgFAjRiIQAAAAAAABQACAGAAAJQAAAIgCAGQgDAHgDAAQgCAAAAgBAjfhyQAAgDAAgDQAAgCAAgCAjfg6QAEgKAHgJAjpgQIAAAJIAABHIAAADIAABdQABgLAFgIQgBgIAAgJQAAgQABgMQABgDABgCQgCgCgBgDQgEgIgBgLAjph2IAAAzAjfAlQADgCADAAQAGAAAFAJIAAAAQAFAJAAAMQAAANgFAIQgFAJgGAAQAAABAAAAQACAJABALQAAAEAAAEIAAAAQACgBABgBQgBgCgBgCQgBgBAAgBAjhBbQACgGABAAQAEAAABAKAjpBAQABgMAEgIQACgFADgCQgJgVgBgXAjjCNQABgEACgDQAFgHAFgDAjpCgQAAAAAAABIAAAIAjoCzIAAgBAjpC3QAAgCABgDQgBgEAAgFIAAAOIAAAEIAAAHIAAAlIAlgTAjVDRQgBABAAACQgDAIgFAAQgFAAgDgIQgCgIgBgKAjVDRQgGgDgFgHQgGgJgCgLAjpC7QABgFAAgDABGA8QgHAFgIADABGA8QgFABgGAAQgMAAgLgDAAWBSQgCAEgDADQgWAaggAFQAAAGgPAFQgIADgLACQgFAGgIAGQgOAJgRAEQgDAHgLAFQgIADgIACIgBAAQgJAEgMACQgDAAgDABQgDAGgCAGQgBABgBABQgDAFgEADIgJAFQgDAAgDAAQgGAAgFgDACBAbQgFAHgHAGQgUARgbADAhHCIQgHAAgHAAQgUAAgPgFQgOgFAAgHQAAgHAOgFQAIgCAKgCQAIgBAJAAQAUAAANAFQAPAFAAAHIAAABAhmBnQgJgGgHgIQgLgMgGgNQgDgGgDgHAiiBEQABAIAAAJQAAATgIAOQgFAHgFADQgDABgBABQABABABABQAAABABABQACACABACQACAFACAFQAPAAALAFQAKAFAAAGQAAAHgKAEQgLAFgOAAQgBACAAADAjOAsQAHgFAHAAQAOAAAJAOQADAFADAHQAAABABACQAMgEAPAAAijBBQAEgEAGgEQAGgDAGgDAjTB6QAEgCAFAAQALAAAIAKAi1CEQAIgBAHAAQAWAAAPAHQAPAIAAAKQAAACgBADAixCKQATAAAOAHQAPAHAAAJQAAAKgPAHQgBAAAAAAAitCUQACAJAAAJQAAAIgBAGAinC4QAAAFgFAEQgDADgDABAi7DPIGljhIj7hy");
	this.shape_10.setTransform(60.8,46.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(0.7,1,1).p("AAEAAQAAACgBABQgBABgCAAQgBAAgBgBQgBgBAAgCQAAAAABgCQABgBABAAQACAAABABQABACAAAAg");
	this.shape_11.setTransform(82.75,44.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(0,255,255,0)").ss(1,1,1).p("AAAB9IAAjcQAAgPABgO");
	this.shape_12.setTransform(0.1,38.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AjhDXQgCgHgBgLIAAgHIAAgDIABgFIgBgKIAAgIIAAgBQABgKAFgJIgBgRQAAgQACgLIABgGQACgGACAAQADAAACALQgCgLgDAAQgCAAgCAGIgDgEQgEgIgBgMIAAgDQABgLAEgJQACgEADgCQADgCADAAQAHAAAEAIIABABIgBgBQgEgIgHAAQgDAAgDACQgJgVgBgYIAAgIIACgPQABAXACAAQACAAACgZIABgZQAEgKAHgKQgFgKAAgMIACAAQAEAAACgGQADgGAAgJQAAgIgDgHIAAgBIAAABQADAHAAAIQAAAJgDAGQgCAGgEAAIgCAAIgEgGIgCgIIAAgHIAAgEQAAgGACgFQACgFADAAQgCgHAAgGIABgGIgDgBIgFgDIABAKIABAdIAAAEIAAAHIAAAVIAAAjIgBAZQgCAZgCAAQgCAAgBgXIAAgCIgCgjIAAgyIACgkIABgPQgDgEAAgFIAAgBQAAgGAGgGIAHgFQAHgEAJgBQgJABgHAEIgHAFIgCgCQgEgEAAgFIAAgBIABgDIgBgCIAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQgCgCAAgDIAAAAQAAgEADgCQACgDAEAAIAAAAQADAAADADIAAAAQACACAAAEIAAABQAFABADADIACACQACAEAAAEIAAACQAHgCAHAAIAHABQALABAKAEQALADAIAJQAGAGAEAHQgDADAAAEQAAAFADADIADADIgDgDQgDgDAAgFQAAgEADgDIAAgBQAEgDAFAAQAFAAADADQADADAAAFQAXADAQAOIACABIAAgBQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABABAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABIAAAAIABACQAEgGAFAAQAFAAAEAHQgFABgFADQgIAGAAAJQAAAEADAEQgDAIAAAKQAAgKADgIQgDgEAAgEQAAgJAIgGQAFgDAFgBQAFgBAFAAQAIAAAGACIACACIACABIABAAQAIAGAAAIIAAABQAAAHgFAFQAFgFAAgHIAAgBQADgCACAAQAFAAAEAEQADADAAAEIAAABQAAAFgDAEQgEADgFAAQgCAAgDgBIgCgCQgDgDAAgDIgDACQgIAGgLAAQgMAAgIgGIgFgGIAFAGQAIAGAMAAQALAAAIgGIADgCQAAADADADIACACQADABACAAQAFAAAEgDQADgEAAgFIAAgBIAGgBQAcAAAUASIALALQAJAOAAASQAAAagUARQgIAHgKAFQgDgngZgcQgMgNgNgIQANAIAMANQAZAcADAnIAAAHQAAAYgJAVQALACAMAAIAMAAQgIAFgIACQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAEgLADQgJADgOABIgDAAQgQAAgKgEQgLgDAAgEIAAgBIAAABQAAAEALADQAKAEAQAAIADAAIgFAGQgWAaggAFIAAAAQAAgHgOgFQgOgFgUAAIgRABQgJgGgHgJQgLgLgGgNIgFgNQgGgSAAgUQAAghARgbQgRAbAAAhQAAAUAGASIgNAGQgGADgEAEQAEgEAGgDIANgGIAFANQAGANALALQAHAJAJAGIgSAEQgOAFAAAHQAAAHAOAFQAPAFAUAAIAOgBQgFAHgIAFQgOAKgRADIABgFQAAgKgPgHQgPgHgVAAIgQABIABABIADAEIAEALQAPAAALAEQALAFAAAHQAAAGgLAFQgLAEgOABQABgHAAgHQAAgKgCgIQACAIAAAKQAAAHgBAHQAOgBALgEQALgFAAgGQAAgHgLgFQgLgEgPAAIgEgLQATABAOAGQAPAHAAAKQAAAJgPAHIgBABIABgBQAPgHAAgJQAAgKgPgHQgOgGgTgBIgDgEIgBgBIAQgBQAVAAAPAHQAPAHAAAKIgBAFQgDAHgLAFQgIAEgIACIAAAAQgKAEgMACIgGAAIABgEIgBAEIAGAAQAAAEgEAEQgEAEgDABIAFgNIgFANIgCABQgDAFgDADIgKAFIgGABQgGAAgFgDQgGgEgFgHQgGgJgCgLIAAAAIAAAAIgBAIIABgIQACALAGAJQAFAHAGAEIgBACQgDAJgFAAQgEAAgEgJgAjbCJIgDAHIADgHQAFgGAFgDQgFADgFAGgAiwCIIgCgDIAEgBQAFgEAFgHQAJgNAAgTQAAgKgCgHQAMgEAPAAQgPAAgMAEIgBgEIgGgMQgJgNgNAAQgIAAgGAFQAEAJAAAMQAAAMgFAJQgEAJgGAAQAGAAAEgJQAFgJAAgMQAAgMgEgJQAGgFAIAAQANAAAJANIAGAMIABAEQACAHAAAKQAAATgJANQgFAHgFAEIgEABQgIgJgLAAQgEAAgEABQAEgBAEAAQALAAAIAJIACADgAjTBkIACAUIAAAHIAAABIAEgDIgDgEIgBgBIgCgUIAAgBIAAABIAAAAgAgXBLIAKgBQABgEAKgDQAJgDANAAQgNAAgJADQgKADgBAEIgKABQgYAAgSgKQgRgKAAgOQAAgOARgKQASgJAYAAQAYAAARAJQARAKAAAOQAAAOgPAJQAPgJAAgOQAAgOgRgKQgRgJgYAAQgYAAgSAJQgRAKAAAOQAAAOARAKQASAKAYAAIAAAAgAAYBAIAQABIAKACQAHACADACQgDgCgHgCIgKgCIABgDIgBADIgQgBIgEAAIAEAAgAh8grQgNgBgKgDQAHgFAGgIQAOgQAAgYQAAgTgIgOQADgIAAgJQAAAJgDAIIgGgIQgKgMgMgDIABgBQAMgHAAgKQAAgKgMgIIgCgBIACABQAMAIAAAKQAAAKgMAHIgBABQgMAGgRAAQARAAAMgGQAMADAKAMIAGAIQAIAOAAATQAAAYgOAQQgGAIgHAFQgJAEgKAAQgTAAgOgRQgFgGgDgIQADAIAFAGQAOARATAAQAKAAAJgEQAKADANABgAhxg5IgLAOIALgOQAXgaAggEIAAAAIANgBQAXAAATAKQgTgKgXAAIgNABIAAAAIgBgCQgEgJAAgMQAAgMAEgJIABgCIgBACQgEAJAAAMQAAAMAEAJIABACQggAEgXAagAgDhWIAAAIIAAgIIAAgHIAAAHgAh9iGQAAAHAJAFQAJAFANAAQANAAAJgFQAJgFAAgGQAAAGgJAFQgJAFgNAAQgNAAgJgFQgJgFAAgHQAAgHAJgFQAJgEANAAQANAAAJAEIAEADIgBAEQAAAAAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAABABQAAAAABAAQAAABABAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABgBQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIABgEIABAAIgBAAIgEgDQgJgEgNAAQgNAAgJAEQgJAFAAAHIAAAAgAjMiFIAFgIIAGgGQAEAAAEgDIAAAAQgOAAgLgFQAGAIAJAAIACAAIgGAGIgFAIQgDgFgDAAIgBABIABgBQADAAADAFgAh3iVQAFAAADgEQADgDAAgFQAAAFgDADQgDAEgFAAIgGgBIAGABgAjSibIgCgBIACABgAjcigIgFgFIAFAFgAjijIQABABAAAAQABABAAAAQABAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAgBQABAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAIAAgDIACgBQACgCAAgDQAAADgCACIgCABIgEABQgEAAgCgCIgBgBIABABQACACAEAAIAEgBIAAADQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBgBIgBgCIABACgAinC4IAAAAgAisCNIAAAAgAhzCHQgOgFAAgHQAAgHAOgFIASgEIARgBQAUAAAOAFQAOAFAAAHIAAAAQAAAHgOAFQgJADgLABIgOABQgUAAgPgFgAhhBrIAAAAgAAbBWIAAAAgAApA+QAJgVAAgYIAAgHQAKgFAIgHQAUgRAAgaQAAgSgJgOQAYAEATAQIACADQgNABgLAHQgMAKAAANQAAAKAGAHQgHAEAAADQAAAEAEACQgLAEAAAGQAAAGAMAEQAMAEARAAIANgBQgFAHgHAGQgUASgaADIgMAAQgMAAgLgCgABcAbQgMgEAAgGQAAgGALgEIABAAIALgDIAAgBQAAgFAJgEQAIgEAMAAQgMAAgIAEQgJAEAAAFIAAABIgLADIgBAAQgEgCAAgEQAAgDAHgEQAEgCAFgCQAMgDARgBIAAAEIADAOIgDgOIAAgEIgBgFQAAgPAFgLQADgGADgDQgDADgDAGQgFALAAAPIABAFQgRABgMADQgFACgEACQgGgHAAgKQAAgNAMgKQALgHANgBIAHgBIALABQABAAAAAAQABgBAAAAQABAAABAAQAAAAABAAQAEAAAEAFIADAFQAEALAAAPQACgEAGgDIAFgBIAGgBIgGABQgBgFgDgEQADAEABAFIgFABQgGADgCAEQAAgPgEgLIgDgFIAHAEQAGAFADAFQAFACAEAEIABACIAIgBIACAAQAMAAAJADQAJAEAAAFQAAAFgJAEQgHADgJABIgFAAIgCAAQgLgBgIgDQgFgCgCgDIAAgBIgBAAIAAgDIAAgCIAAACIAAADIAAAAIAAABIABAAQACADAFACQAIADALABIACAAIAFAAQAEADAAACQAAAGgLAEIgGACQgJADgMABQAAgEgEgCQAEgEAAgEQAAgDgCgBIACgMIgCAMQACABAAADQAAAEgEAEIgCgCIACgDIACgHIgCAHIgCADIACACQAEACAAAEQAAAGgMAEQgHACgJABIgNABQgRAAgMgEgACIAGQAEALAHAAQAFAAAEgIQgEAIgFAAQgHAAgEgLIgBgCIABACgABnAEQAIgBAKAAIAOABIgOgBQgKAAgIABgAAyAKIAAAAgADegLIgBgCIABgDIADgBIACABIACADQAAAAAAAAQAAABgBAAQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAIgDgCgACjgNIgBAAIAAgBIAAAAIABAAIgBAAIABAAIAAABgACjgNIAAAAgACEgOIAAAAgACigOIAAAAgACvgbIAAAAgAjUhgIAAAAgAhEiPIAAAAgAjBiTIgCAAQgJAAgGgIQALAFAOAAIAAAAQgEADgEAAIAAAAgAjSibIAAAAgAicicIAAAAgAjHjHQAAgEgCgEIAGgBQAKAAAGAJIABABIgHgBQgHAAgHACIAAgCgAiyjGIAAAAgAjXjPIAAAAg");
	this.shape_13.setTransform(60.275,45.975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFE315").s().p("A4dHQQhOAAhBggQgogVgkgjQgsgqgWgyQgZg3AAhBIAAh0IAAjcIACgcQAIg+Afg0QAVghAdgcIAXgVQBUhDBwAAMAw8AAAQCAAABaBYQBbBYAAB8IAAFHQAAB8hbBYQhaBYiAAAgA3dDmIAlgTIglATIAAglIAAAlgA3dC2IAAAEIAAAHQABAKACAIQADAIAFAAQAEAAADgIIABgDQAGADAGAAIAGAAIAJgFQAEgDADgFIABgCQAEgBAEgDQADgEABgFQAMgCAKgEIAAAAQAIgCAIgDQALgFACgHQASgEAOgJQAIgGAFgGQALgCAIgDQAPgFAAgGQAggFAXgaIAFgHQAOAAAJgDQALgDAAgFQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAQAJgDAIgFQAagDATgRQAIgGAEgHQAJgBAIgDQAMgEAAgGQAMgBAJgDIAGgCQALgEAAgEQAAgEgFgDQAJAAAHgEQAKgDgBgFQABgFgKgEQgIgEgMAAIgCAAIgIABIgCgCQgEgEgEgBQgDgGgHgEIgGgEQgEgGgEAAQgBAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBABIgLgBIgHAAIgDgCQgSgRgZgDIgKgMQgUgRgcAAIgGAAQAAgEgDgDQgEgDgFAAQgDAAgDABQAAgIgIgFIgBgBID8ByImmDhIGmjhIj8hyIgCgBIgCgBIjFhZIAAgBQgDgCgDAAIgJgEIAJAEIgBAAQgDAAgDACQgCADAAADIAAgIIAAAIIAAABQAAACACADQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABIAAgJIAAAJIAAABIAAAEIAAABIAAAXIAAACQAAAEADAEIgCAQIgBAjIAAg7IAAA7IAAAzIAAA0IAAg0IABAjIAAABIgBAQIAAAIIAABHIAAhHQABAXAJAVQgDACgCAFQgFAIAAAMIAAADQAAALAFAIIADAFIgBAFQgCAMAAAQIABARQgFAIgBALIAAhdIAABdIAAABIAAAIIABAJIgBAFIAAgOIAAAOgAwbgVIgBADIABADIADABQABAAAAAAQABAAAAAAQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQABAAAAgBIgCgDIgDgBIgDABgA3dDmgA3LB7IAAgIIABACIAEAEIgFACgA3TheIAAgVIACAIIAEAGQAAAMAEALQgGAJgFAKIABgjgA3ViaIAAgLIAEADIAEACIgBAFQAAAHACAGQgDABgCAFQgCAFAAAGIgCgdgA0FiFgA0YiKQgEAAgFACQgEgIgFAAQgFAAgEAHIgBgCIAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABIAAAAIgCgBQgQgOgXgCQAAgFgEgEQgDgDgFAAQgEAAgEADIgBABQgDgHgGgGQgIgIgLgDQgKgFgLgBIgBAAQgGgJgKAAIgGABIgCgDQgDgDgFAAIAAgCQAAgDgCgCIDFBZQgGgDgJAAgA3djLQAAAGAEAEIACACQgGAFAAAGgA3djQIAAABIAAADg");
	this.shape_14.setTransform(187.6,46.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhaCMQgfgwAAhcQAAi7B5AAQA8AAAfAvQAfAvAABdQAAC8h6AAQg7AAgfgwgAghhhQgKAYAABJQAABIAKAaQALAZAWAAQAXAAALgYQAKgZAAhKQAAhJgKgYQgLgZgXAAQgWAAgLAZg");
	this.shape_15.setTransform(309.075,45.775);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgkC3IAAltIBJAAIAAFtg");
	this.shape_16.setTransform(288.025,45.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhaC3IAAltIBKAAIAAEoIBrAAIAABFg");
	this.shape_17.setTransform(272,45.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhaCMQgfgwAAhcQAAi7B5AAQA8AAAfAvQAfAvAABdQAAC8h6AAQg7AAgfgwgAghhhQgKAYAABJQAABIAKAaQALAZAWAAQAXAAALgYQAKgZAAhKQAAhJgKgYQgLgZgXAAQgWAAgLAZg");
	this.shape_18.setTransform(245.475,45.775);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhjC3IAAltIDHAAIAAA/Ih9AAIAABgIBgAAIAAA9IhgAAIAACRg");
	this.shape_19.setTransform(221.725,45.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AglC3IAAkoIhDAAIAAhFIDRAAIAABFIhFAAIAAEog");
	this.shape_20.setTransform(198.675,45.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAlC3IgsiRIglAAIAACRIhJAAIAAltIBqAAQAdAAARADQAQAEARANQARANAJAYQAKAYAAAcQAABFgwAbIA+CggAgsgUIAhAAQArAAAAg1QgBgSgGgLQgGgMgJgFQgIgDgPAAIgfAAg");
	this.shape_21.setTransform(175.3,45.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhaCMQgfgwAAhcQAAi7B5AAQA8AAAfAvQAfAvAABdQAAC8h6AAQg7AAgfgwgAghhhQgKAYAABJQAABIAKAaQALAZAWAAQAXAAALgYQAKgZAAhKQAAhJgKgYQgLgZgXAAQgWAAgLAZg");
	this.shape_22.setTransform(146.125,45.775);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhuC3IAAltIBgAAQArAAAZAJQAYAIAQAcQARAcAAAqQAAAogNAaQgOAZgXAMQgYAMgvAAIgbAAIAACHgAglgOIAXAAQAeAAAJgPQAIgPAAgZQAAgVgHgMQgGgNgJgEQgJgEgQABIgXAAg");
	this.shape_23.setTransform(120.475,45.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(0,255,255,0)").ss(1,1,1).p("AAABwIAAjGQAAgNABgM");
	this.shape_24.setTransform(18.85,39.525);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(1,1,1).p("ACegdQAEgBAEAAQAAAAABAAQALAAAIADQAIAEAAAFQAAAEgIAEQgHACgIABQAEACAAAEQAAAEgJADQgDACgDAAQgIADgLABQAAAFgLAEQgGACgIABQgGAAgGAAQgPAAgLgDQgLgEAAgFQAAgFAKgDQAAAAABgBQAFgCAFgBQAHAAAJAAQAHAAAFAAQgBgFgBgHQAAgCAAgBQgBgDAAgCQAAgOAEgKQADgGADgCQACgBACAAQAEAAAEAFQABACABACQAEAKAAAOQACgEAFgDQACAAACgBQADgBADAAgACHgwQADABADACQAFAFADAFQAEABAEAEQABAAAAABABQgJQgGgGAAgJQAAgMALgJQAKgFAMgCABChIQAWADARAPQABAAABACQADgBADAAQAGAAAEABABYAAQAAAAAAAAQAAgFAIgEQAHgDALAAABQgJQADgBAFgCQALgDAPAAACIAFQgEAHgFAAQgGAAgEgKQAAgBgBgBACrgHQgCAAgCAAQgBAAAAAAQgKgBgIgCQgFgDgBgCIAAAAIgBgBQAAgCAAAAQAAgBAAgBACNgPIABAAACNgQIAAABIAAAAQAAAGgCAFQAAAEgCACQgBACAAABQABAAABABQADADAAADACLgEQACACAAACQAAAEgDACACVgjQADADAAAEAB0AYQgFAGgGAFQgSAQgYADQgGAFgIACQABABAAACQAAAEgKADQgIADgMAAQgCAAgBAAQgOAAgJgDQgKgDAAgEIAAAAQAAgEAKgDQAHgDAMAAQACAAACAAQAIAAAGABAi4i1QAGgBAHAAQADAAADAAQAKABAJAEQABABABAAQALAHAAAJQAAAJgLAGQgBABAAAAQgLAGgPAAIAAAAQgNAAgKgFQgBAAgBgBQgBAAgBgBQgDgBgBgCQgEgCgBgCQgDgDAAgEIAAA1QABgSABgOQAAgJABgFAi5i9QACgBADAAQAJAAAFAIIABAAAiSixQAKADAHAHQAGAGADAGQAAAAAAgBQADgCAFAAQAEAAADACQADADAAAFQAAAEgDADQgDADgEAAQgDAAgCgBQgBgBgCgBQgCgDAAgEQAAgEACgDAjKjMQADAAACACIABABQACACAAADQAAAAAAABQAEABACACQABABACACQABADAAAEQAAAAAAABAjCjDQgBACgCACQgBABAAABQAAAAAAACQAAACgCACQgCACgCAAQgCAAgCgCQgBgBAAgBQgBgBAAgBIAAAFIAAABIAAAUIAAACAjSjEQAAgDADgDQACgCADAAIAAAAIgIgDAjSi7IAAAAAjGi9QgCAAgCAAQgDAAgCgCIgBAAAjSjDIAAAIQAAgCACgCQgCgCAAgCgAjSjEIAAABAjSjLIAAAHAjSihQAAgGAGgEQgBgBgBgBQgEgDAAgFAjMirQACgDAEgCQAGgEAIgBAjSi2QAAgCABgBAjCh/QgCgGAAgGQAAgCAAgDAjCh/QAAAAABAAQACAAACAEQADgEACgEQADgCACgCIgBAAQgIAAgGgIAjKiUQAAAEAAAGQABAMAAAOQAAgFACgFQACgEADgBAi9h7QAAABABAAQACAGAAAIQAAAIgCAFQgCAFgDAAQgCAAgBAAQgCgCgBgDQgBgEgBgEQAAgCAAgDQAAgCAAgCAiriKQgEACgEABAiJgtQgIADgJAAQgRAAgNgPQgEgGgDgHQgEgJgBgLAjJg0QAEgJAGgJAjJhnQAAAJAAAKQAAARAAAPQgBAMAAALQgBAWgCAAQgCAAgBgVQAAAAAAgBQgBgOgBgRIAAAtIAAAIIAABBIAAACIAABUQAAAAAAAAIAAAJAjSgPQAAgHACgGAjShqIAAAuAgMheQgBAAgBABQgIAGgKAAQgKAAgHgGQgEgCgBgDQgDgDAAgEQAAgIAIgFQAEgDAFgBQAEgBAEAAQAHAAAGACIixhQAgHhqQACgCADAAQAEAAADAEQADACAAAEQACgBADAAQAaAAASAQQAFAFAEAGQAJAMAAAQQAAAYgSAPQgIAGgJAEAgPh3IgCgBIgCgBAgPh3IABABQAGAFABAHQAAABAAAAQAAAGgFAFAAIhiQAAAAAAABQAAAFgDADQgDAEgEAAQgDAAgCgCQgCgBAAgBQgDgCAAgDAh1iLQAAAJgDAHAg9h7QgBAGgHAEQgIAEgMAAQgMAAgIgEQgIgEAAgHQAAgGAIgFQAIgEAMAAQAMAAAIAEQACACABABIABAAAiRiQQALADAJAKQADAEACAEQAHANAAAQQAAAWgMAPQgGAHgGAFAhmiUQAVACAOANQABAAABABIAAgBQACgBACAAQACAAABABQACACAAACQAAADgCABQAAAAAAAAQAAABABABQADgGAFAAQAFAAAEAHAg9h7QgCAAgCgCQgCgBAAgDQAAgCABgBAg6h9QgBACgCAAAg5hSQgBgBAAgBQgEgHAAgLQAAgLAEgIQAAgBABgBAh1gqQAFgHAFgGQAWgXAcgEIAAAAQAGgBAGAAQAUAAASAKAgQBAQgFAAgEAAQgWAAgQgJQgPgJAAgMQAAgNAPgIQAQgJAWAAQAWAAAOAJQAQAIAAANQAAAMgOAIAgHhXQAAADAAAEQAAADAAAEQALAGALAMQAXAaACAiQAAAEAAAEQAAAVgIATQAAABgBABQAFAAAEACQAGACADACAg5hSQAAgIADgIAh1gqQgLgBgJgCAh+AuQgGgQAAgRQAAgfAPgYAA/A2QgFAAgFAAQgLAAgKgBAAUBKQgDADgCADQgUAXgcAFQAAAGgNAEQgIACgKACQgEAGgIAFQgMAJgQACQgCAHgLAEQgGAEgHABIgBAAQgIAEgLABQgBAFgDAEQgDADgEAAQgBABAAABQgDAFgDACIgIAFQgDAAgDAAQgFAAgFgDQgBABAAACQgDAHgEAAQgEAAgDgHQgCgHgBgKIAAAiIAigRAh5A6QgEgGgBgGAhcBdQAHgBAIAAQASAAANAEQANAFAAAGIAAABAhcBdQgIgFgHgIQgJgLgFgLAhAB6QgGABgHAAQgSAAgNgFQgNgEAAgHQAAgGANgFQAHgCAJgBAijB3QAHgBAHAAQATAAANAGQAOAHAAAJQAAADgBABAiTA6QADgEAGgDQAFgCAHgDAi5AnQAFgEAIAAQALAAAIANQAEAFACAFQAAABABACQACAHAAAIQAAASgJAMQgEAGgFADQgBABgCAAQABACABABQABABAAAAQABACABACQADAFABAFQACAHAAAIQAAAIgBAFQgBACAAACQgCAGgDAFAjJAiQADgDADAAQAGAAAEAIIAAAAQAEAJAAALQAAALgEAIQgEAHgGAAQAAABAAAAQACAIAAAKQAAAEAAADQACgBACgBQADgBAEAAQAKAAAHAIAjSA6QABgLADgIQADgEACgBQgIgUgBgVAjNB+QgBgHAAgIQAAgOACgLQABgCABgDQgCgBgCgCQgDgIgBgKAjKBRQABgFACAAQACAAACAJAjNB+QACgCABgEQAEgGAFgDAi9BtQgCgBgBgCQgBgBAAgBAjSCQQABgKAEgIAigB8QARAAANAGQAOAHAAAIQAAAJgOAGIAAAAAicCGQANAAAKAEQAKAEAAAGQAAAGgKAEQgJAEgNAAAiWClQgDAAgDABAjSClIAAADIAAAGAjSClQAAgDABgCQgBgDAAgEgAjRChIAAgBAjSCoQABgEAAgDAjAC8QgGgDgEgGQgFgJgCgJAiSA9QALgDAOAAAioC6IF7jKIjihnABNAEQgEgDAAgCQAAgEAHgE");
	this.shape_25.setTransform(73.475,46.35);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(0.7,1,1).p("AAEAAQAAABgCABQgBACgBAAQAAAAgCgCQgBgBAAgBQAAAAABgCQACgBAAAAQABAAABABQACACAAAAg");
	this.shape_26.setTransform(93.225,44.75);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AjKDCQgDgHAAgJIAAgHIAAgDIABgEIAAAAIAAAAIgBgIIAAgIIAAgBQABgKAEgHIgBgPQAAgPACgKIACgFIgEgEQgEgHAAgLIAAgCQAAgLAEgHQADgFACgBQgIgTgBgVIAAgJIACgMIAAgCIgCgfIAAguIACggIABgOQABADAEACIAAAJIABAaQAAgFACgEQACgFACAAIACgBQACAAACAFIAFgIIAFgFIgBAAQgJAAgFgHQAKAEAMAAIABAAQAPAAALgGQAKADAJALIAGAIQAHAMAAARQAAAVgNAPQgFAIgGAEQgIAEgJAAQgRAAgNgQQgEgGgDgGQADAGAEAGQANAQARAAQAJAAAIgEQAGgEAFgIQANgPAAgVQAAgRgHgMQADgIAAgIQAAAIgDAIIgGgIQgJgLgKgDQgLAGgPAAIgBAAQgMAAgKgEQAFAHAJAAIABAAIgFAFIgFAIQgCgFgCAAIgCABQgCgGAAgGIABgFIACABIgCgBIgDgBIgDgDQgEgCgBgDQgDgDAAgEIAAgCQAAgFAFgFQACgCAEgCQAHgEAIgBQgIABgHAEQgEACgCACIgCgCQgDgDAAgEIAAgCIABgDIABACQAAABABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAAAAAQAAAAABAAQAAAAABgBQAAAAABgBQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBIgBgCIACgBIACgEIgCAEIgCABIABACQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBIgBgCIgBgBIAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBIgCgEIAAgBQAAgDACgCQACgCAEAAIAAAAQADAAACACIAAAAQACACAAADIAAACQAEAAADADIACACQACADAAAEIAAACQAGgCAGAAIAHABQAKABAJAEIACABQALAGgBAJQABAJgLAHIgBAAIABAAQALgHgBgJQABgJgLgGIgCgBQAKACAHAIQAFAFAEAHIAAgBQADgDAFAAQAEAAADADQADADAAAEQAAAFgDADQgDADgEAAIgFgBIgDgCQgDgDAAgFQABgEACgCQgCACgBAEQAAAFADADIADACIAFABQAEAAADgDQADgDAAgFQAVADAOAMIACABIAAAAIADgCQABAAABAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAIAAABIABACIgBABQgEAJAAAKQAAALAEAIIABACIgBgCQgEgIAAgLQAAgKAEgJIABgBQADgGAFAAQAEAAAFAHQgGAAgDADQgIAGAAAHQAAAEACAEQgCgEAAgEQAAgHAIgGQADgDAGAAQAEgCAEAAQAHAAAGACIABACIADABIAAAAQAHAFAAAHQADgBACAAQAEAAAEADQADADAAADIAFAAQAZAAASAQIAKAKQAWADARAPIACACIAGAAIAKABQgDACgDAGQgEAKAAANIABAFIgBgFQAAgNAEgKQADgGADgCIAEgCQAEAAADAFIADAFQAEAKAAANQAAgNgEgKIgDgFIAHAEQAFAEADAFQAEABAEAEIABACIgGABIAGgBIAIgBIABAAQALAAAIADQAHAEABAEQgBAFgHADQgHADgIAAIgEAAIgBAAQgKAAgIgDQgFgCgBgDIAAAAIgBgBIAAgCIAAgCIAAACIAAACIAAABIAAAAIABAAQABADAFACQAIADAKAAIABAAIAEAAQAEADAAACQgBAFgIAEIgGABQgIADgLABQAAgDgEgCQAEACAAADQAAAFgLAEIgPADIgLABQgPAAgLgEQgLgEAAgFQAAgFAKgDIABgBIAKgCQAHgCAJAAIAMABIABACQAEAKAGAAQAFAAADgHQgDAHgFAAQgGAAgEgKIgBgCIgCgMIAAgDQgPAAgLADIgJAEIAJgEQALgDAPAAIAAADIACAMIgMgBQgJAAgHACIAAgBQAAgEAIgEQAHgEALAAQgLAAgHAEQgIAEAAAEIAAABIgKACIgBABQgEgDAAgDQAAgDAGgDQgGADAAADQAAADAEADQgKADAAAFQAAAFALAEQALAEAPAAIALgBQgEAHgGAFQgSAQgYACIgKABQgMAAgJgCQAJACAMAAIAKgBQgHAFgHACQAAABAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAAEgKADQgJADgMAAIgCAAQgOAAgKgDQgJgDgBgEIAAAAQABgEAJgDQAIgCAMgBQgMABgIACQgJADgBAEIgJAAQgVAAgQgJQgQgIAAgNQAAgMAQgJQAQgJAVAAQAWAAAPAJQAPAJAAAMQABAMgOAIQAOgIgBgMQAAgMgPgJQgPgJgWAAQgVAAgQAJQgQAJAAAMQAAANAQAIQAQAJAVAAIAJAAIAAAAQABAEAJADQAKADAOAAIACAAIgEAGQgUAXgdAFIAAgBQAAgGgMgEQgNgFgSAAIgPABQgIgFgHgIQgKgKgEgMQAEAMAKAKQAHAIAIAFQgJABgHADQgNAEAAAGQAAAHANAEQANAFASAAIANgBQgFAGgHAFQgMAJgQADIABgFQAAgJgOgGQgOgHgSAAIgOABIgCgCIADgBQAFgEAEgGQAIgMABgRQAAgJgCgGQALgEAOAAQgOAAgLAEIgBgEQgCgFgEgFQgIgNgLAAQgIAAgFAFQAFgFAIAAQALAAAIANQAEAFACAFIABAEQACAGAAAJQgBARgIAMQgEAGgFAEIgDABQgHgJgKAAQgEAAgDACIgDgEIgBgBQAAgLgCgHIAAgBQgCgKgCAAQgCAAgBAGQABgGACAAQACAAACAKIAAABQACAHAAALIAAAHQgFADgEAGIgDAGIADgGQAEgGAFgDIAEgCQADgCAEAAQAKAAAHAJIACACIABACIACADIAEAKQACAHAAAJQAAAHgBAFQABgFAAgHQAAgJgCgHQANAAAKAEQAKAEAAAGQAAAGgKAEQgJAEgNAAQANAAAJgEQAKgEAAgGQAAgGgKgEQgKgEgNAAIgEgKQARABANAFQAOAHgBAIQABAJgOAGIAAABIgBAAQgJADgLACIgFAAIABgEIgBAEQgCAGgDAGQADgGACgGIAFAAQAAAEgDAEQgDADgEABIgBABIgGAHIgJAFIgFAAQgFAAgFgDQgGgDgEgGQgFgIgCgKQACAKAFAIQAEAGAGADIgBADQgDAHgEAAQgEAAgDgHgAjNCrIABgHIgBAHgAi1BRQgEAIgFAAQAFAAAEgIQAFgIAAgLQAAgLgEgIIgBAAQgDgIgHAAQgCAAgDACQADgCACAAQAHAAADAIIABAAQAEAIAAALQAAALgFAIgAAkA6IAJACQAGACADACQgDgCgGgCIgJgCIABgCIgBACIAAAAgAiFA3QgGADgDADQADgDAGgDIALgGQACAGAEAGQgEgGgCgGQgFgPAAgSQAAgfAPgXQgPAXAAAfQAAASAFAPIgLAGgAAWA5IAOABIgOgBIgEAAIAEAAgAAtAQQAAAVgIATQAIgTAAgVIAAgHQgDgjgWgZQgMgMgLgHIAAgHIAAgHIgCgCQgCgCAAgDQAAADACACIACACIAAAHIAAAHQALAHAMAMQAWAZADAjIAAAHgACMAIIACACIgCgCIACgDIACgGQAAABABAAQAAAAAAAAQABABAAABQAAAAAAABQAAAEgEADQAEgDAAgEQAAgBAAAAQAAgBgBgBQAAAAAAAAQgBAAAAgBIACgLIgCALIgCAGIgCADIAAAAgAA9gBQgIAFgIAFQAIgFAIgFQATgQgBgXQABgQgJgNQAJANgBAQQABAXgTAQgAjJgDQACAAACgXIABgXQADgJAHgIQgFgKAAgLQgCgBgBgEIgCgHIAAgGIAAgEIAAAEIAAAGIAAATIAAAfIgBAXQgCAXgCAAQgBAAgBgVQABAVABAAgABPgUQAAAIAFAHQgFgHAAgIQAAgNALgIQAKgGAMgCQgMACgKAGQgLAIAAANIAAAAgACZgXQgFADgCADQACgDAFgDIAEgBQgBgEgCgEQACAEABAEIgEABgAhwgmIAKgNQAVgYAdgDIAAAAIALgBQAVAAARAJQgRgJgVAAIgLABQAAgJACgHQgCAHAAAJIAAAAQgdADgVAYIgKANQgLgBgJgDQAJADALABIAAAAgAAChSQAEAAAEgEQADgDAAgEIAAgCIAAACQAAAEgDADQgEAEgEAAQgCAAgDgCQADACACAAgAgshZQAGAFALAAQAKAAAHgFIADgCQAEgFAAgGIAAgBIAAABQAAAGgEAFIgDACQgHAFgKAAQgLAAgGgFQgEgCgCgDQACADAEACgAi8hWQADAAABgGQADgFAAgIQAAgIgDgFIAAgBIAAABQADAFAAAIQAAAIgDAFQgBAGgDAAIgDgBIADABgAhVhpQANAAAHgFQAIgEAAgGQABAAAAAAQABAAAAAAQABAAAAgBQAAAAABAAQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIABgDIgBADQAAAAAAABQAAAAAAABQABAAAAABQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQAAAGgIAEQgHAFgNAAQgLAAgIgFQgIgEAAgGQAAgHAIgEQAIgEALAAQANAAAHAEIAEADIABgBIgBABIgEgDQgHgEgNAAQgLAAgIAEQgIAEAAAHQAAAGAIAEQAIAFALAAIAAAAgAiuiEQAEAAAEgDQgEADgEAAgAjLi7QACACAEAAIADgBIgDABQgEAAgCgCIAAgBgAiXCpIAAAAgAh9CjQAOgGgBgJQABgIgOgHQgNgFgRgBIgCgDIgBgCIAOgBQASAAAOAHQAOAGAAAJIgBAFQgDAGgKAFIgNAFgAhjCUIAAAAgAibB/IAAAAgAhnB5QgNgEAAgHQAAgGANgEQAHgDAJgBIAPgBQASAAANAFQAMAEAAAGIAAABQAAAGgMAEQgIADgKABIgNABQgSAAgNgFgAiNBBIAAAAgABEA5IAAAAgAB4AbIAAAAgABSAHIAAAAgABdAEIAAAAgAB5ADIAAAAgACQgBIAAAAgADIgKIgBgCIABgDIACAAIACAAIACADQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAIgCgCgACTgMIAAAAgACTgMIgBAAIAAAAIAAgBIABABIgBAAIABAAIAAAAIAAAAgACSgMgACTgMgAg0hOIAAAAgAhzh3IAAAAgAizizQAAgEgCgDIAGgBQAIAAAGAIIABABIgHgBQgGAAgGACIAAgCgAigiyIAAAAg");
	this.shape_27.setTransform(73,46.025);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFE315").s().p("A2BGiQhGAAg6gdQgkgTghgfQgngmgUguQgWgxgBg6IAAhpIAAjGIADgZQAGg4AdgvQASgdAagaIAWgSQBKg9BlAAMAsDAAAQBzAABSBPQBSBQAABvIAAEnQAABvhSBQQhSBPhzAAgA1HDPIAhgRIghARIAAghgA1HCkIAAADIAAAHQAAAJADAHQADAHAEAAQAEAAADgHIABgDQAFADAFAAIAFAAIAJgFIAGgHIABgBQAEgBADgDQADgEAAgEQALgCAJgDIABAAIANgFQAKgFADgGQAQgDAMgJQAHgFAFgGQAKgBAIgDQAMgEAAgGQAdgFAVgXIAEgGQAMAAAJgDQAKgDAAgEQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQAHgCAHgFQAYgCASgQQAGgFAEgHIAPgDQALgEAAgFQALgBAIgDIAGgBQAIgEABgEQAAgDgEgDQAIAAAHgDQAHgDABgFQgBgEgHgEQgIgDgLAAIgBAAIgIABIgBgCQgEgEgEgBQgDgFgFgEIgHgEQgDgFgEAAIgEACIgKgBIgGAAIgCgCQgRgPgWgDIgKgKQgSgQgZAAIgFAAQAAgDgDgDQgEgDgEAAQgDAAgDABQAAgHgHgFIAAAAIDjBmIl8DKIF8jKIjjhmIgDgBIgBgCIiyhQIAAAAQgCgCgDAAIgIgEIAIAEIAAAAQgEAAgCACQgCACAAADIAAgHIAAAHIAAABIACAEQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAAAIAAgIIAAAIIAAABIABABIgBADIAAgEIAAAEIAAACIAAATIAAgTQAAAEADADIACACQgFAFAAAFIAAACQAAAEADADIgBAOIgCAgIAAg1IAAA1IAAAuIAAAtIAAAJIAABAIAAACQAAALAEAHIAEAEIgCAFQgCAKAAAPIABAPQgEAHgBAKIAAhUIAABUIAAABIAAAIIABAIIgBAEIAAgMIAAAMIAAAAgAuxgTIgBADIABACIACACQAAAAABAAQAAAAAAgBQABAAAAAAQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAgBIgCgDIgCAAIgCAAgA1HCkgA02BoIABABIADAEIgEACIAAgHgA1HgHQABAVAIATQgCABgDAFQgEAHAAALgA1Hg9IACAfIAAACIgCAMgA0+hUIAAgTIACAHQABAEACABQAAALAFAKQgHAIgDAJIAAgfgA0/iLIAAgJIADADIADABIgBAFQAAAGACAGQgCAAgCAFQgCAEAAAFIgBgagAyEh3gAyVh8QgEAAgEACQgFgHgEAAQgFAAgDAGIgBgCIAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAgBAAIgDACIAAAAIgCgBQgOgMgVgDQAAgEgDgDQgDgDgEAAQgFAAgDADIAAABQgEgHgFgFQgHgIgKgCQgJgEgKgBIgBgBQgGgIgIAAIgGABIgCgCQgDgDgEAAIAAgCQAAgDgCgCICyBQQgGgCgHAAgA1Hi3g");
	this.shape_28.setTransform(187.6,46.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:76.525,y:44.5}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_9,p:{x:87.625,y:44.7}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,376.2,92.9);


(lib.animasi_logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// kotak (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AkrZJMAAAgyRIJXAAMAAAAyRg");
	var mask_graphics_1 = new cjs.Graphics().p("AkrZJMAAAgyRIJXAAMAAAAyRg");
	var mask_graphics_2 = new cjs.Graphics().p("AkrZJMAAAgyRIJXAAMAAAAyRg");
	var mask_graphics_3 = new cjs.Graphics().p("AkrZJMAAAgyRIJXAAMAAAAyRg");
	var mask_graphics_4 = new cjs.Graphics().p("AkrZJMAAAgyRIJXAAMAAAAyRg");
	var mask_graphics_5 = new cjs.Graphics().p("AkrZJMAAAgyRIJXAAMAAAAyRg");
	var mask_graphics_6 = new cjs.Graphics().p("AkrZJMAAAgyRIJXAAMAAAAyRg");
	var mask_graphics_7 = new cjs.Graphics().p("AkrZJMAAAgyRIJXAAMAAAAyRg");
	var mask_graphics_8 = new cjs.Graphics().p("AkrZJMAAAgyRIJXAAMAAAAyRg");
	var mask_graphics_9 = new cjs.Graphics().p("AkrZJMAAAgyRIJXAAMAAAAyRg");
	var mask_graphics_10 = new cjs.Graphics().p("AkrZJMAAAgyRIJXAAMAAAAyRg");
	var mask_graphics_11 = new cjs.Graphics().p("AkrZJMAAAgyRIJXAAMAAAAyRg");
	var mask_graphics_12 = new cjs.Graphics().p("AkrZJMAAAgyRIJXAAMAAAAyRg");
	var mask_graphics_13 = new cjs.Graphics().p("AkrZJMAAAgyRIJXAAMAAAAyRg");
	var mask_graphics_14 = new cjs.Graphics().p("AkrZJMAAAgyRIJXAAMAAAAyRg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:344.2253,y:116.9752}).wait(1).to({graphics:mask_graphics_1,x:349.889,y:116.9752}).wait(1).to({graphics:mask_graphics_2,x:355.5535,y:116.9752}).wait(1).to({graphics:mask_graphics_3,x:361.2181,y:116.9752}).wait(1).to({graphics:mask_graphics_4,x:366.8818,y:116.9752}).wait(1).to({graphics:mask_graphics_5,x:372.5465,y:116.9752}).wait(1).to({graphics:mask_graphics_6,x:378.211,y:116.9752}).wait(1).to({graphics:mask_graphics_7,x:383.8747,y:116.9752}).wait(1).to({graphics:mask_graphics_8,x:306.7681,y:116.9752}).wait(1).to({graphics:mask_graphics_9,x:229.6606,y:116.9752}).wait(1).to({graphics:mask_graphics_10,x:152.5536,y:116.9752}).wait(1).to({graphics:mask_graphics_11,x:75.4466,y:116.9752}).wait(1).to({graphics:mask_graphics_12,x:-1.661,y:116.9752}).wait(1).to({graphics:mask_graphics_13,x:-78.7676,y:116.9752}).wait(1).to({graphics:mask_graphics_14,x:-155.925,y:116.9752}).wait(1));

	// logo_copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABsJeIBrhaQBdBhCBAAQDFAABflSIBCjpQjREriGAAQggAAgYgTIgHAeIlmA1IgflVImpAAQh8C+huBMQhuBLiYAAQiQAAhphUIBpheQBKBlB4AAQBzAABlhUQBlhVCMjWIFQoDQhVgJg8AAQijAAhZBJQhZBHAACHIiYBDQAOiCBEhVQBKhfBkgoQBlgoC/gMIBzgHICegaIADAzQBNgzA9AAQBfAAAwBUQAwBSARDEIAgF7QALCIAyAAQAnAABShQQBRhPBMhuIClpGIC1gOIhHDaIiZIeQifI1mqAAQiGAAh4g/gABuozIAGB9IAtHdQAPCmAdA1QAcA1BKAAIBKgDQgqgxgLh5IguoCQgTjPhTAAQgeAAgoAUgAmIANIGCAAIgyoGg");
	this.shape.setTransform(105.125,66.875);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(15));

	// logo
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("ABsJeIBrhaQBdBhCBAAQDFAABflSIBCjpQjREriGAAQggAAgYgTIgHAeIlmA1IgflVImpAAQh8C+huBMQhuBLiYAAQiQAAhphUIBpheQBKBlB4AAQBzAABlhUQBlhVCMjWIFQoDQhVgJg8AAQijAAhZBJQhZBHAACHIiYBDQAOiCBEhVQBKhfBkgoQBlgoC/gMIBzgHICegaIADAzQBNgzA9AAQBfAAAwBUQAwBSARDEIAgF7QALCIAyAAQAnAABShQQBRhPBMhuIClpGIC1gOIhHDaIiZIeQifI1mqAAQiGAAh4g/gABuozIAGB9IAtHdQAPCmAdA1QAcA1BKAAIBKgDQgqgxgLh5IguoCQgTjPhTAAQgeAAgoAUgAmIANIGCAAIgyoGg");
	this.shape_1.setTransform(105.125,66.875);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(15));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,0,234.3,133.8);


(lib.btn_portfolio = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.button_1 = new lib.btn_portofolio();
	this.button_1.name = "button_1";
	this.button_1.setTransform(155.35,27.75,0.8295,0.5981,0,0,0,187.3,46.4);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,312.2,55.6);


(lib.animasi_welcome = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// e
	this.instance = new lib.Tween24("synched",0);
	this.instance.setTransform(456.85,-34.25);
	this.instance._off = true;

	this.instance_1 = new lib.Tween25("synched",0);
	this.instance_1.setTransform(446.85,47.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},30).to({state:[{t:this.instance_1}]},4).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).to({_off:true,x:446.85,y:47.75},4).wait(2));

	// m
	this.instance_2 = new lib.Tween26("synched",0);
	this.instance_2.setTransform(376.5,-34.25);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween27("synched",0);
	this.instance_3.setTransform(366.5,47.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},24).to({state:[{t:this.instance_3}]},4).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).to({_off:true,x:366.5,y:47.75},4).wait(8));

	// o
	this.instance_4 = new lib.Tween28("synched",0);
	this.instance_4.setTransform(295.95,-34.25);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween29("synched",0);
	this.instance_5.setTransform(285.95,47.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},19).to({state:[{t:this.instance_5}]},4).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({_off:true,x:285.95,y:47.75},4).wait(13));

	// c
	this.instance_6 = new lib.Tween22("synched",0);
	this.instance_6.setTransform(228.15,-34.25);
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween23("synched",0);
	this.instance_7.setTransform(218.15,47.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},14).to({state:[{t:this.instance_7}]},4).wait(18));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14).to({_off:false},0).to({_off:true,x:218.15,y:47.75},4).wait(18));

	// l
	this.instance_8 = new lib.Tween30("synched",0);
	this.instance_8.setTransform(180.1,-34.25);
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween31("synched",0);
	this.instance_9.setTransform(170.1,47.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},9).to({state:[{t:this.instance_9}]},4).wait(23));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({_off:false},0).to({_off:true,x:170.1,y:47.75},4).wait(23));

	// e
	this.instance_10 = new lib.Tween32("synched",0);
	this.instance_10.setTransform(132.05,-34.25);
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween33("synched",0);
	this.instance_11.setTransform(122.05,47.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},5).to({state:[{t:this.instance_11}]},4).wait(27));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(5).to({_off:false},0).to({_off:true,x:122.05,y:47.75},4).wait(27));

	// w
	this.instance_12 = new lib.Tween34("synched",0);
	this.instance_12.setTransform(56.35,-34.25);

	this.instance_13 = new lib.Tween35("synched",0);
	this.instance_13.setTransform(46.35,47.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12}]}).to({state:[{t:this.instance_13}]},4).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true,x:46.35,y:47.75},4).wait(32));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-82,495.3,177.5);


(lib.Tween62 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.buton_github = new lib.buton_github();
	this.buton_github.name = "buton_github";
	this.buton_github.setTransform(221.95,98.65,1,1,0,0,0,70,17.6);
	new cjs.ButtonHelper(this.buton_github, 0, 1, 1);

	this.buton_instagram = new lib.buton_instagram();
	this.buton_instagram.name = "buton_instagram";
	this.buton_instagram.setTransform(0.05,99.65,1,1,0,0,0,88,18.6);
	new cjs.ButtonHelper(this.buton_instagram, 0, 1, 1);

	this.buton_facebook = new lib.buton_facebook();
	this.buton_facebook.name = "buton_facebook";
	this.buton_facebook.setTransform(-222.9,98.8,1,1,0,0,0,69,19);
	new cjs.ButtonHelper(this.buton_facebook, 0, 1, 1);

	this.instance = new lib.btn_portfolio();
	this.instance.setTransform(-0.15,-90,1,1,0,0,0,155.4,27.8);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.buton_facebook},{t:this.buton_instagram},{t:this.buton_github}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-292.9,-117.8,585.8,236.6);


(lib.Tween61 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.buton_github = new lib.buton_github();
	this.buton_github.name = "buton_github";
	this.buton_github.setTransform(221.95,98.65,1,1,0,0,0,70,17.6);
	this.buton_github.alpha = 0;
	new cjs.ButtonHelper(this.buton_github, 0, 1, 1);

	this.buton_instagram = new lib.buton_instagram();
	this.buton_instagram.name = "buton_instagram";
	this.buton_instagram.setTransform(0.05,99.65,1,1,0,0,0,88,18.6);
	this.buton_instagram.alpha = 0;
	new cjs.ButtonHelper(this.buton_instagram, 0, 1, 1);

	this.buton_facebook = new lib.buton_facebook();
	this.buton_facebook.name = "buton_facebook";
	this.buton_facebook.setTransform(-222.9,98.8,1,1,0,0,0,69,19);
	this.buton_facebook.alpha = 0;
	new cjs.ButtonHelper(this.buton_facebook, 0, 1, 1);

	this.instance = new lib.btn_portfolio();
	this.instance.setTransform(-0.15,-90,1,1,0,0,0,155.4,27.8);
	this.instance.alpha = 0;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.buton_facebook},{t:this.buton_instagram},{t:this.buton_github}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-292.9,-117.8,585.8,236.6);


(lib.Tween60 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.animasi_welcome();
	this.instance.setTransform(-4.15,-403.4,1,1,0,0,0,242.7,47.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000099").s().p("AANBPQgZAgggAAQgVAAgMgPQgMgPAAgVQAAhFBjgFIAAgvQAAgTgEgHQgDgJgOABQgLAAgHAEQgGAFAAAEQAAAEAEAFQAFAHAAAJQAAAOgIAKQgIAKgLAAQgLAAgIgKQgHgJAAgOQAAgWAUgQQAVgQAkAAQAcAAATAJQATAJAAAhIAABtQAAAcAMAAQADAAAGgEIAFALQgQAagWAAQgYAAgPgggAgaAKQgLAKAAAWQAAATAHAJQAGALALAAQALAAAGgLQAGgJAAgdIAAghQgaABgKAKg");
	this.shape.setTransform(90.475,501.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000099").s().p("AgrCrIAAgQIATAAIAAiwIgTAAIAAgQIAZAAQASAAAOgDIAPgDIAADGIAPAAIAAAQgAgThpQgJgMAAgPQAAgQAJgLQAIgLALAAQAMAAAJALQAIALAAAQQAAAPgIAMQgJALgMAAQgLAAgIgLg");
	this.shape_1.setTransform(74.825,494.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000099").s().p("AhGCTQgTghAAgxQAAguAUgdQATgfAaAAQAWAAARAaIAAiPIgfAAIAAgQIAbAAQAKAAAWgDIAZgCIAAFRIAWAAIAAAPIgZAAIgWABIgXADIgFAAIAAggIgBAAQgNAjgZAAQgaAAgUghgAgYgPQgEALAAAhIAABPQAAAgADALQADAMAIAAQAJgBAJgOQALgPAAgpIAAg4QAAgggJgOQgJgRgJABQgIAAgEALg");
	this.shape_2.setTransform(59.575,494.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000099").s().p("Ag3BNQgXgiAAgsQAAgrAXghQAXghAhAAQAeAAAWAYQAWAZAEAxIhgAAIAAAhQAAApAFAOQAFAQATAAQARAAAPgPQAPgOAIgfIAMAAQgIAogTATQgUAUgcAAQgkAAgXgigAgMhYQgFAIAAAfIAAAUIApAAIAAgVQAAgdgGgIQgGgIgKAAQgIAAgGAHg");
	this.shape_3.setTransform(41.175,501.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000099").s().p("AA9BsIAAgQIAXAAIAAiMQAAgagEgFQgEgGgHAAQgMAAgMAOQgMANgDARQgDAQAAAcIAABZIAXAAIAAAQIhjAAIAAgQIAXAAIAAiLQAAgZgEgGQgEgHgIAAQgNAAgOARQgNAQAAAuIAABiIAXAAIAAAQIhkAAIAAgQIAXAAIAAiwIgXAAIAAgQIAcAAQAPAAAOgEIAMgDIAIAAIAAAtIAAAAQATgtAqAAQArAAAFAvQAVgvAlAAQAXAAAMAJQALAIADAOQADANAAAUIAACHIAXAAIAAAQg");
	this.shape_4.setTransform(15.925,501.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000099").s().p("AgrCxIAAgQIASAAIAAk8IgSAAIAAgQQAZAAAXgCIAQgDIAHAAIAAFRIAQAAIAAAQg");
	this.shape_5.setTransform(-15.9,494.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000099").s().p("AANBPQgZAgggAAQgVAAgMgPQgMgPAAgVQAAhFBjgFIAAgvQAAgTgEgHQgDgJgOABQgLAAgHAEQgGAFAAAEQAAAEAEAFQAFAHAAAJQAAAOgIAKQgIAKgLAAQgLAAgIgKQgHgJAAgOQAAgWAUgQQAVgQAkAAQAcAAATAJQATAJAAAhIAABtQAAAcAMAAQADAAAGgEIAFALQgQAagWAAQgYAAgPgggAgaAKQgLAKAAAWQAAATAHAJQAGALALAAQALAAAGgLQAGgJAAgdIAAghQgaABgKAKg");
	this.shape_6.setTransform(-31.075,501.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000099").s().p("AgrCrIAAgQIATAAIAAiwIgTAAIAAgQIAZAAQASAAAOgDIAPgDIAADGIAPAAIAAAQgAgThpQgJgMAAgPQAAgQAJgLQAIgLALAAQAMAAAJALQAIALAAAQQAAAPgIAMQgJALgMAAQgLAAgIgLg");
	this.shape_7.setTransform(-46.725,494.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000099").s().p("AgqBZIgNANIgJAAIAAhLIAMAAQANBDAqAAQAQAAALgKQAMgJAAgPQAAgLgGgHQgGgGgXgDQgWgDgOgHQgPgFgJgPQgJgPAAgaQAAgdAPgWQAQgVAcAAQATAAASAPIAJgPIAJAAIAABAIgMAAQgLgwgjAAQgOgBgKAKQgKAIAAANQAAAKAHAGQAIAGAfAEQAgAEANASQAOASAAAcQAAAjgRAXQgRAXgcAAQgbAAgSgWg");
	this.shape_8.setTransform(-59.625,501.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000099").s().p("Ag/BNQgYggAAgsQAAgtAYghQAZghAmAAQAnAAAYAhQAZAgAAAuQAAAsgZAhQgYAhgnAAQgnAAgYgigAgQhaQgHAGgBAOQgBAOAAA4QAAA4ABAMQABANAHAJQAGAHALAAQAJAAAHgGQAHgIABgRQABgSAAgsQAAhCgDgRQgFgSgSAAQgKAAgGAHg");
	this.shape_9.setTransform(-77.35,501.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000099").s().p("AgqBZIgNANIgJAAIAAhLIAMAAQANBDAqAAQAQAAALgKQAMgJAAgPQAAgLgGgHQgGgGgXgDQgWgDgOgHQgPgFgJgPQgJgPAAgaQAAgdAPgWQAQgVAcAAQATAAASAPIAJgPIAJAAIAABAIgMAAQgLgwgjAAQgOgBgKAKQgKAIAAANQAAAKAHAGQAIAGAfAEQAgAEANASQAOASAAAcQAAAjgRAXQgRAXgcAAQgbAAgSgWg");
	this.shape_10.setTransform(-94.725,501.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000099").s().p("AhxDhIAAgWIA6AAIAAmWIg6AAIAAgWIDjAAIAAAWIg9AAIAAGWIA9AAIAAAWg");
	this.shape_11.setTransform(208.7,292.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000099").s().p("AhTDKQgTAOgPAOIgWAAIAAiDIAaAAQAdBvBUAAQAsAAAYgbQAYgaAAghQAAgTgLgOQgKgPgOgJQgOgJg+gNQg/gNgegjQgdgkAAg2QAAg6AkgoQAkgoA1AAQAoAAApAdQANgIAPgMIAVAAIAGB5IgbAAQgVg8gbgYQgagYglAAQghAAgUAVQgVAUAAAbQAAAiAWAMQAVANA1ALQBSASAcAkQAcAjAAA3QAABBglAvQglAvhDAAQguAAgmgeg");
	this.shape_12.setTransform(157.875,292.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000099").s().p("ACFDkIkHmLIAAFFQAAAbAGAIQAGAHAZAAIAaAAIAAAWIiNAAIAAgWIASAAQAbABAFgKQAFgIAAgnIAAk3QAAgagEgGQgFgHgYAAIgYAAIAAgWICoAAICwEJIAAjCQAAgegGgJQgGgKgaAAIgVAAIAAgWICIAAIAAAWIgQAAQgZAAgHAIQgGAIAAAXIAAGLg");
	this.shape_13.setTransform(97.775,293.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000099").s().p("AAIDmIAAgWIA7AAIgnhoIiLAAIgSAuQgMAcAAAMQAAASAhAAIAZAAIAAAWIiPAAIAAgWIAMAAQAaAAAJgJQAJgJANggICcmDIASAAICkG1IAuAAIAAAWgAhmBQIB6AAIg6ibg");
	this.shape_14.setTransform(30.725,292.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000099").s().p("Ah3DhIAAgWIBFAAIAAi1Ih+jhIghAAIAAgWIDQAAIAAAWIgzAAIBjC/IBMiZIAHgMQAEgMAAgDQAAgLgUAAIgSAAIAAgWIByAAIAAAWQgcAAgKAHQgJAGgNAZIhcC0IAAC8IBEAAIAAAWg");
	this.shape_15.setTransform(-36.2,292.85);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000099").s().p("AhxDhIAAgWIA6AAIAAmWIg6AAIAAgWIDjAAIAAAWIg8AAIAAGWIA8AAIAAAWg");
	this.shape_16.setTransform(-92.6,292.85);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000099").s().p("ABHDJQgfgbgChFQgChFgQgVQgQgTgoAAIgYAAIAADOIA6AAIAAAWIjfAAIAAgWIA4AAIAAmWIg4AAIAAgWIDfAAQBqABAoAhQAnAhAAAmQAAAogkAdQgkAchIAKIAAABQA2ANAbAWQAbAXAHAcQAGAbABAnQAAAmAGAJQAGAJAQAAQARAAAUgLIAAAaQggARgoAAQg0AAgfgagAg8gbIAqAAQArAAARgQQARgQAAg7QAAg3gQgQQgQgPgnAAIgwAAg");
	this.shape_17.setTransform(-150.475,292.95);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000099").s().p("AAIDmIAAgWIA7AAIgnhoIiLAAIgSAuQgMAcAAAMQAAASAhAAIAZAAIAAAWIiPAAIAAgWIAMAAQAaAAAJgJQAJgJANggICcmDIASAAICkG1IAuAAIAAAWgAhmBQIB6AAIg6ibg");
	this.shape_18.setTransform(-219.375,292.425);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000099").s().p("AhRCIQghg3AAhRQAAhUAig1QAjg2AuAAQAsAAAkAyQAiAyAABcQAABWghA1QghA0gwAAQgyAAggg4gAgaifQgLAOgDAdQgDAeAABWQABBVACAcQACAcAKAQQAJARATAAQARAAALgNQAKgOADgeQADgdAAhYQAAhUgCgcQgDgbgJgRQgJgQgVAAQgQAAgKANg");
	this.shape_19.setTransform(122.8,202.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000099").s().p("AhBC7IAAgSIAiAAIAAlRIgiAAIAAgSICDAAIAAASIgjAAIAAFRIAjAAIAAASg");
	this.shape_20.setTransform(95.225,202.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000099").s().p("AhtC7IAAgSIAjAAIAAlRIgjAAIAAgSICHAAIAAASIglAAIAAFRIAXAAQAVAAAJgEQAKgCAMgQQALgPAJgXQAHgWAHgbIAMAAIgEB/g");
	this.shape_21.setTransform(68.5,202.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000099").s().p("AhRCIQghg3AAhRQAAhUAjg1QAhg2AvAAQAtAAAjAyQAiAyAABcQAABWggA1QgiA0gwAAQgyAAggg4gAgaifQgLAOgDAdQgDAeAABWQABBVACAcQACAcAKAQQAJARAUAAQAQAAALgNQALgOACgeQADgdAAhYQAAhUgDgcQgBgbgKgRQgJgQgUAAQgRAAgKANg");
	this.shape_22.setTransform(36.75,202.075);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000099").s().p("AhsC7IAAgSIAhAAIAAlRIghAAIAAgSIDXAAIACByIgOAAQgNhgg3AAIgnAAIAACeIAGAAQAsgBAEhCIAOAAIAACaIgMAAQgCgdgKgVQgMgUgaAAIgGAAIAACiIAkAAIAAASg");
	this.shape_23.setTransform(4.875,202.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000099").s().p("AhFC7IAAgSIAmAAIAAlRIgFAAQgtABgOBnIgMAAIACh6IDTAAIACB6IgMAAQgOhngsgBIgHAAIAAFRIAnAAIAAASg");
	this.shape_24.setTransform(-26,202.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000099").s().p("AApCmQgSgWgBg5QgBg5gKgRQgJgRgWAAIgOAAIAACsIAiAAIAAASIiBAAIAAgSIAgAAIAAlQIggAAIAAgSICBAAQA8AAAXAbQAWAcABAfQAAAhgVAYQgVAYgpAHIAAABQAfALAQATQAPASAEAXQAEAXAAAgQABAfADAIQADAHAJAAQAKAAAMgJIAAAVQgTAOgXAAQgeAAgSgVgAgigWIAYAAQAYAAALgNQAJgOAAgwQAAgugJgNQgKgMgVAAIgcAAg");
	this.shape_25.setTransform(-58.9,202.175);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000099").s().p("AhRCIQghg3AAhRQAAhUAjg1QAhg2AvAAQAtAAAjAyQAiAyAABcQAABWghA1QghA0gwAAQgyAAggg4gAgaifQgLAOgDAdQgDAeAABWQABBVACAcQACAcAKAQQAJARAUAAQAQAAALgNQALgOACgeQADgdAAhYQAAhUgDgcQgBgbgKgRQgJgQgUAAQgRAAgKANg");
	this.shape_26.setTransform(-92.85,202.075);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000099").s().p("AhuC7IAAgSIAgAAIAAlRIggAAIAAgSIB4AAQA3AAAXAeQAXAdAAAoQAAAogaAeQgZAdhAAAIgMAAIAACdIAkAAIAAASgAgQgFIAOAAQAQAAAJgEQAKgEAFgRQAHgTAAgmQAAgmgHgSQgFgRgKgDQgIgFgQAAIgPAAg");
	this.shape_27.setTransform(-124.8,202.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-245.6,-533.2,491.29999999999995,1066.4);


(lib.Tween59 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.animasi_welcome();
	this.instance.setTransform(-4.15,-403.4,1,1,0,0,0,242.7,47.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000099").s().p("AANBPQgZAgggAAQgVAAgMgPQgMgPAAgVQAAhFBjgFIAAgvQAAgTgEgHQgDgJgOABQgLAAgHAEQgGAFAAAEQAAAEAEAFQAFAHAAAJQAAAOgIAKQgIAKgLAAQgLAAgIgKQgHgJAAgOQAAgWAUgQQAVgQAkAAQAcAAATAJQATAJAAAhIAABtQAAAcAMAAQADAAAGgEIAFALQgQAagWAAQgYAAgPgggAgaAKQgLAKAAAWQAAATAHAJQAGALALAAQALAAAGgLQAGgJAAgdIAAghQgaABgKAKg");
	this.shape.setTransform(90.475,501.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000099").s().p("AgrCrIAAgQIATAAIAAiwIgTAAIAAgQIAZAAQASAAAOgDIAPgDIAADGIAPAAIAAAQgAgThpQgJgMAAgPQAAgQAJgLQAIgLALAAQAMAAAJALQAIALAAAQQAAAPgIAMQgJALgMAAQgLAAgIgLg");
	this.shape_1.setTransform(74.825,494.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000099").s().p("AhGCTQgTghAAgxQAAguAUgdQATgfAaAAQAWAAARAaIAAiPIgfAAIAAgQIAbAAQAKAAAWgDIAZgCIAAFRIAWAAIAAAPIgZAAIgWABIgXADIgFAAIAAggIgBAAQgNAjgZAAQgaAAgUghgAgYgPQgEALAAAhIAABPQAAAgADALQADAMAIAAQAJgBAJgOQALgPAAgpIAAg4QAAgggJgOQgJgRgJABQgIAAgEALg");
	this.shape_2.setTransform(59.575,494.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000099").s().p("Ag3BNQgXgiAAgsQAAgrAXghQAXghAhAAQAeAAAWAYQAWAZAEAxIhgAAIAAAhQAAApAFAOQAFAQATAAQARAAAPgPQAPgOAIgfIAMAAQgIAogTATQgUAUgcAAQgkAAgXgigAgMhYQgFAIAAAfIAAAUIApAAIAAgVQAAgdgGgIQgGgIgKAAQgIAAgGAHg");
	this.shape_3.setTransform(41.175,501.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000099").s().p("AA9BsIAAgQIAXAAIAAiMQAAgagEgFQgEgGgHAAQgMAAgMAOQgMANgDARQgDAQAAAcIAABZIAXAAIAAAQIhjAAIAAgQIAXAAIAAiLQAAgZgEgGQgEgHgIAAQgNAAgOARQgNAQAAAuIAABiIAXAAIAAAQIhkAAIAAgQIAXAAIAAiwIgXAAIAAgQIAcAAQAPAAAOgEIAMgDIAIAAIAAAtIAAAAQATgtAqAAQArAAAFAvQAVgvAlAAQAXAAAMAJQALAIADAOQADANAAAUIAACHIAXAAIAAAQg");
	this.shape_4.setTransform(15.925,501.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000099").s().p("AgrCxIAAgQIASAAIAAk8IgSAAIAAgQQAZAAAXgCIAQgDIAHAAIAAFRIAQAAIAAAQg");
	this.shape_5.setTransform(-15.9,494.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000099").s().p("AANBPQgZAgggAAQgVAAgMgPQgMgPAAgVQAAhFBjgFIAAgvQAAgTgEgHQgDgJgOABQgLAAgHAEQgGAFAAAEQAAAEAEAFQAFAHAAAJQAAAOgIAKQgIAKgLAAQgLAAgIgKQgHgJAAgOQAAgWAUgQQAVgQAkAAQAcAAATAJQATAJAAAhIAABtQAAAcAMAAQADAAAGgEIAFALQgQAagWAAQgYAAgPgggAgaAKQgLAKAAAWQAAATAHAJQAGALALAAQALAAAGgLQAGgJAAgdIAAghQgaABgKAKg");
	this.shape_6.setTransform(-31.075,501.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000099").s().p("AgrCrIAAgQIATAAIAAiwIgTAAIAAgQIAZAAQASAAAOgDIAPgDIAADGIAPAAIAAAQgAgThpQgJgMAAgPQAAgQAJgLQAIgLALAAQAMAAAJALQAIALAAAQQAAAPgIAMQgJALgMAAQgLAAgIgLg");
	this.shape_7.setTransform(-46.725,494.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000099").s().p("AgqBZIgNANIgJAAIAAhLIAMAAQANBDAqAAQAQAAALgKQAMgJAAgPQAAgLgGgHQgGgGgXgDQgWgDgOgHQgPgFgJgPQgJgPAAgaQAAgdAPgWQAQgVAcAAQATAAASAPIAJgPIAJAAIAABAIgMAAQgLgwgjAAQgOgBgKAKQgKAIAAANQAAAKAHAGQAIAGAfAEQAgAEANASQAOASAAAcQAAAjgRAXQgRAXgcAAQgbAAgSgWg");
	this.shape_8.setTransform(-59.625,501.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000099").s().p("Ag/BNQgYggAAgsQAAgtAYghQAZghAmAAQAnAAAYAhQAZAgAAAuQAAAsgZAhQgYAhgnAAQgnAAgYgigAgQhaQgHAGgBAOQgBAOAAA4QAAA4ABAMQABANAHAJQAGAHALAAQAJAAAHgGQAHgIABgRQABgSAAgsQAAhCgDgRQgFgSgSAAQgKAAgGAHg");
	this.shape_9.setTransform(-77.35,501.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000099").s().p("AgqBZIgNANIgJAAIAAhLIAMAAQANBDAqAAQAQAAALgKQAMgJAAgPQAAgLgGgHQgGgGgXgDQgWgDgOgHQgPgFgJgPQgJgPAAgaQAAgdAPgWQAQgVAcAAQATAAASAPIAJgPIAJAAIAABAIgMAAQgLgwgjAAQgOgBgKAKQgKAIAAANQAAAKAHAGQAIAGAfAEQAgAEANASQAOASAAAcQAAAjgRAXQgRAXgcAAQgbAAgSgWg");
	this.shape_10.setTransform(-94.725,501.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000099").s().p("AhxDhIAAgWIA6AAIAAmWIg6AAIAAgWIDjAAIAAAWIg9AAIAAGWIA9AAIAAAWg");
	this.shape_11.setTransform(208.7,292.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000099").s().p("AhTDKQgTAOgPAOIgWAAIAAiDIAaAAQAdBvBUAAQAsAAAYgbQAYgaAAghQAAgTgLgOQgKgPgOgJQgOgJg+gNQg/gNgegjQgdgkAAg2QAAg6AkgoQAkgoA1AAQAoAAApAdQANgIAPgMIAVAAIAGB5IgbAAQgVg8gbgYQgagYglAAQghAAgUAVQgVAUAAAbQAAAiAWAMQAVANA1ALQBSASAcAkQAcAjAAA3QAABBglAvQglAvhDAAQguAAgmgeg");
	this.shape_12.setTransform(157.875,292.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000099").s().p("ACFDkIkHmLIAAFFQAAAbAGAIQAGAHAZAAIAaAAIAAAWIiNAAIAAgWIASAAQAbABAFgKQAFgIAAgnIAAk3QAAgagEgGQgFgHgYAAIgYAAIAAgWICoAAICwEJIAAjCQAAgegGgJQgGgKgaAAIgVAAIAAgWICIAAIAAAWIgQAAQgZAAgHAIQgGAIAAAXIAAGLg");
	this.shape_13.setTransform(97.775,293.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000099").s().p("AAIDmIAAgWIA7AAIgnhoIiLAAIgSAuQgMAcAAAMQAAASAhAAIAZAAIAAAWIiPAAIAAgWIAMAAQAaAAAJgJQAJgJANggICcmDIASAAICkG1IAuAAIAAAWgAhmBQIB6AAIg6ibg");
	this.shape_14.setTransform(30.725,292.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000099").s().p("Ah3DhIAAgWIBFAAIAAi1Ih+jhIghAAIAAgWIDQAAIAAAWIgzAAIBjC/IBMiZIAHgMQAEgMAAgDQAAgLgUAAIgSAAIAAgWIByAAIAAAWQgcAAgKAHQgJAGgNAZIhcC0IAAC8IBEAAIAAAWg");
	this.shape_15.setTransform(-36.2,292.85);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000099").s().p("AhxDhIAAgWIA6AAIAAmWIg6AAIAAgWIDjAAIAAAWIg8AAIAAGWIA8AAIAAAWg");
	this.shape_16.setTransform(-92.6,292.85);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000099").s().p("ABHDJQgfgbgChFQgChFgQgVQgQgTgoAAIgYAAIAADOIA6AAIAAAWIjfAAIAAgWIA4AAIAAmWIg4AAIAAgWIDfAAQBqABAoAhQAnAhAAAmQAAAogkAdQgkAchIAKIAAABQA2ANAbAWQAbAXAHAcQAGAbABAnQAAAmAGAJQAGAJAQAAQARAAAUgLIAAAaQggARgoAAQg0AAgfgagAg8gbIAqAAQArAAARgQQARgQAAg7QAAg3gQgQQgQgPgnAAIgwAAg");
	this.shape_17.setTransform(-150.475,292.95);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000099").s().p("AAIDmIAAgWIA7AAIgnhoIiLAAIgSAuQgMAcAAAMQAAASAhAAIAZAAIAAAWIiPAAIAAgWIAMAAQAaAAAJgJQAJgJANggICcmDIASAAICkG1IAuAAIAAAWgAhmBQIB6AAIg6ibg");
	this.shape_18.setTransform(-219.375,292.425);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000099").s().p("AhRCIQghg3AAhRQAAhUAig1QAjg2AuAAQAsAAAkAyQAiAyAABcQAABWghA1QghA0gwAAQgyAAggg4gAgaifQgLAOgDAdQgDAeAABWQABBVACAcQACAcAKAQQAJARATAAQARAAALgNQAKgOADgeQADgdAAhYQAAhUgCgcQgDgbgJgRQgJgQgVAAQgQAAgKANg");
	this.shape_19.setTransform(122.8,202.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000099").s().p("AhBC7IAAgSIAiAAIAAlRIgiAAIAAgSICDAAIAAASIgjAAIAAFRIAjAAIAAASg");
	this.shape_20.setTransform(95.225,202.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000099").s().p("AhtC7IAAgSIAjAAIAAlRIgjAAIAAgSICHAAIAAASIglAAIAAFRIAXAAQAVAAAJgEQAKgCAMgQQALgPAJgXQAHgWAHgbIAMAAIgEB/g");
	this.shape_21.setTransform(68.5,202.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000099").s().p("AhRCIQghg3AAhRQAAhUAjg1QAhg2AvAAQAtAAAjAyQAiAyAABcQAABWggA1QgiA0gwAAQgyAAggg4gAgaifQgLAOgDAdQgDAeAABWQABBVACAcQACAcAKAQQAJARAUAAQAQAAALgNQALgOACgeQADgdAAhYQAAhUgDgcQgBgbgKgRQgJgQgUAAQgRAAgKANg");
	this.shape_22.setTransform(36.75,202.075);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000099").s().p("AhsC7IAAgSIAhAAIAAlRIghAAIAAgSIDXAAIACByIgOAAQgNhgg3AAIgnAAIAACeIAGAAQAsgBAEhCIAOAAIAACaIgMAAQgCgdgKgVQgMgUgaAAIgGAAIAACiIAkAAIAAASg");
	this.shape_23.setTransform(4.875,202.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000099").s().p("AhFC7IAAgSIAmAAIAAlRIgFAAQgtABgOBnIgMAAIACh6IDTAAIACB6IgMAAQgOhngsgBIgHAAIAAFRIAnAAIAAASg");
	this.shape_24.setTransform(-26,202.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000099").s().p("AApCmQgSgWgBg5QgBg5gKgRQgJgRgWAAIgOAAIAACsIAiAAIAAASIiBAAIAAgSIAgAAIAAlQIggAAIAAgSICBAAQA8AAAXAbQAWAcABAfQAAAhgVAYQgVAYgpAHIAAABQAfALAQATQAPASAEAXQAEAXAAAgQABAfADAIQADAHAJAAQAKAAAMgJIAAAVQgTAOgXAAQgeAAgSgVgAgigWIAYAAQAYAAALgNQAJgOAAgwQAAgugJgNQgKgMgVAAIgcAAg");
	this.shape_25.setTransform(-58.9,202.175);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000099").s().p("AhRCIQghg3AAhRQAAhUAjg1QAhg2AvAAQAtAAAjAyQAiAyAABcQAABWghA1QghA0gwAAQgyAAggg4gAgaifQgLAOgDAdQgDAeAABWQABBVACAcQACAcAKAQQAJARAUAAQAQAAALgNQALgOACgeQADgdAAhYQAAhUgDgcQgBgbgKgRQgJgQgUAAQgRAAgKANg");
	this.shape_26.setTransform(-92.85,202.075);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000099").s().p("AhuC7IAAgSIAgAAIAAlRIggAAIAAgSIB4AAQA3AAAXAeQAXAdAAAoQAAAogaAeQgZAdhAAAIgMAAIAACdIAkAAIAAASgAgQgFIAOAAQAQAAAJgEQAKgEAFgRQAHgTAAgmQAAgmgHgSQgFgRgKgDQgIgFgQAAIgPAAg");
	this.shape_27.setTransform(-124.8,202.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-245.6,-533.2,491.29999999999995,1066.4);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.buton_github = new lib.buton_github();
	this.buton_github.name = "buton_github";
	this.buton_github.setTransform(221.95,98.65,1,1,0,0,0,70,17.6);
	this.buton_github.alpha = 0;
	new cjs.ButtonHelper(this.buton_github, 0, 1, 1);

	this.buton_instagram = new lib.buton_instagram();
	this.buton_instagram.name = "buton_instagram";
	this.buton_instagram.setTransform(0.05,99.65,1,1,0,0,0,88,18.6);
	this.buton_instagram.alpha = 0;
	new cjs.ButtonHelper(this.buton_instagram, 0, 1, 1);

	this.buton_facebook = new lib.buton_facebook();
	this.buton_facebook.name = "buton_facebook";
	this.buton_facebook.setTransform(-222.9,98.8,1,1,0,0,0,69,19);
	this.buton_facebook.alpha = 0;
	new cjs.ButtonHelper(this.buton_facebook, 0, 1, 1);

	this.instance = new lib.btn_portfolio();
	this.instance.setTransform(-0.15,-90,1,1,0,0,0,155.4,27.8);
	this.instance.alpha = 0;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.buton_facebook},{t:this.buton_instagram},{t:this.buton_github}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-292.9,-117.8,585.8,236.6), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween62("synched",0);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-292.9,-117.8,585.8,236.6), null);


// stage content:
(lib._1PEMBUATANCVDENGANHTML5CANVASARIYANSI = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {portfolio:24,btn_portfolio:24};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,23,24,43];
	// timeline functions:
	this.frame_0 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.buton_facebook.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("https://free.facebook.com/?_rdc=1&_rdr", "_blank");
		}
		 
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.buton_instagram.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("https://instagram.com/ariyansie11?igshid=Mzc0YWU1OWY=", "_blank");
		}
		
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.buton_github.addEventListener("click", fl_ClickToGoToWebPage_3);
		
		function fl_ClickToGoToWebPage_3() {
			window.open("https://github.com/Ariyansi", "_blank");
		}
		
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.button_1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_2.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_2()
		{
			this.gotoAndPlay("portfolio");
		}
		
		
		/*
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.button_1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_3()
		{
			this.gotoAndStop("portfolio");
		}
	}
	this.frame_23 = function() {
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.button_1.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.gotoAndPlay("portfolio");
		}
	}
	this.frame_24 = function() {
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.movieClip_3.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_5.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_5()
		{
			this.gotoAndPlay("portfolio");
		}
		
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.movieClip_3.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_4.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_4()
		{
			this.gotoAndPlay("portfolio");
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.movieClip_3.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_5.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_5()
		{
			this.gotoAndPlay("portfolio");
		}
	}
	this.frame_43 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(23).call(this.frame_23).wait(1).call(this.frame_24).wait(19).call(this.frame_43).wait(17));

	// line
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000099").ss(6,1,1).p("EgtaAAAMBa1AAA");
	this.shape.setTransform(373.1,986.25);

	this.instance = new lib.Tween55("synched",0);
	this.instance.setTransform(373.1,986.25);
	this.instance._off = true;

	this.instance_1 = new lib.Tween56("synched",0);
	this.instance_1.setTransform(373.1,986.25);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance}]},24).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},15).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).to({startPosition:0},1).to({_off:true,alpha:0},15).wait(20));

	// cloud
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("EAqggEwQgBgMAAgMQAAj5B7iwQB6iwCuAAQCtAAB7CwQB6CwAAD5QAADXhbCfQgOAagRAYQh7CwitAAQg0AAgvgQQg/AxhfAqQhVAmhgAZQA4AeAyAnQDpCxAAD6QAAAMAAAMEA2JAAuQALAWAKAXQBHCbAqC3A7YinQAhhcBLhLQCHiHC/AAQC+AACHCHQCHCHAAC+QAACshwB/QAZAgAXAmQA1BWAiBlQAfiaBFh9QB/jjCyAAQBBAAA6AeQAgh0AvhpQCXlTDUAAQDCAACOEZQAOAcANAeQCXFSAAHfQAACKgMB9Eg4OgFTQCsimDRAAQFUAADwG3QAaAvAXAxQAJgPAKgNQDNkPEhAAQCxAACSBmEgq4AOiQgdh/AAiPQAAluC5kIAtYOiQgFg3AAg8QAAiQAah8AluOiQgNh9AAiKQAAlMBIkIA7fOiQAAgBAAgCQAAlMCPjrQAEgGAEgGQgSgPgSgSQiGiHAAi9QAAhUAahKA5IFcQCOjfDFAAQCrAACAClAS1khQgFglAAgnQAAjhCfigQCfifDiAAQDhAACfCfQCfCeABDgQAAABAAACQAADiigCeQhdBdh0AmQhSAchdAAQgoAAglgFQBlDHAYDvQAHBJAABMQAABYgJBSEAjwgFwQDuAIDCA4AHXjQQDEiNDzAAQCdAACKA8QC4BPCWC6QBLBdA1BoAenFVQCEgmCZAAQECAADGBrAd/CWQApBLAABVQAAAPgBAQQgOCaiZB0EAvfAEAQhvgkhWh8Qh1imgFjq");
	this.shape_1.setTransform(359.875,598.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EAvfAOiIAAgYQAAj6jpixQgygng4gdQBggbBVglQBfgrA/gvQg/AvhfArQhVAlhgAbQA4AdAyAnQDpCxAAD6IAAAYIzhAAQAJhSAAhYQAAhMgHhJQCZh0AOiaQCEgmCZAAQECAADGBsQjGhskCAAQiZAAiEAmIABgfQAAhWgphKQApBKAABWIgBAfQgOCaiZB0QgYjvhljHQAlAFAoAAQBdAABSgcQhSAchdAAQgoAAglgFQg1hohLhcQiWi7i4hPQC4BPCWC7QBLBcA1BoQBlDHAYDvQAHBJAABMQAABYgJBSIyBAAQAMh9AAiKQAAnfiXlTIgbg5QDEiMDzgBQCdAACKA8QgFglAAgnQAAjiCfifQCfifDiAAQDhAACfCfQCfCfABDfIAAADQAADiigCdQhdBeh0AmQB0gmBdheQCgidAAjiIAAgDQDuAIDCA4QAFDpB1CnQBWB8BvAlQhvglhWh8Qh1ingFjpIgBgYQAAj5B7iwQB6iwCuAAQCtAAB7CwQB6CwAAD5QAADXhbCfQgOAagRAYQh7CwitAAQg0AAgvgPQAvAPA0AAQCtAAB7iwQARgYAOgaIAVAtQBHCbAqC3IAAH1gAJ9OiIvrAAQgNh9AAiKQAAlMBIkIQAgh1AvhpQCXlSDUAAQDCAACOEZIAbA5QCXFTAAHfQAACKgMB9gAtYOiQgFg4AAg6QAAiRAah8QgaB8AACRQAAA6AFA4IuHAAIAAgDQAAlMCPjsIAIgLQgSgPgSgSQiGiGAAi+QAAhUAahJQgaBJAABUQAAC+CGCGQASASASAPIgIALQiPDsAAFMIAAADIvZAAQgdh/AAiPQAAlvC5kHQi5EHAAFvQAACPAdB/ItWAAIAAz1QCsimDRgBQFUABDwG3QAaAvAXAxIATgcQDNkPEhgBQCxAACSBoQAhhdBLhLQCHiHC/AAQC+AACHCHQCHCHAAC+QAACshwB/QAZAgAXAlQA1BYAiBkQAfiaBFh9QB/jiCyAAQBBAAA6AdQhIEIAAFMQAACKANB9gA5IFcQCOjgDFAAQCrABCAClQiAilirgBQjFAAiODgg");
	this.shape_2.setTransform(359.875,598.75);

	this.instance_2 = new lib.Tween57("synched",0);
	this.instance_2.setTransform(359.85,598.75);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween58("synched",0);
	this.instance_3.setTransform(359.85,598.75);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.instance_2}]},24).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},15).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).to({startPosition:0},1).to({_off:true,alpha:0},15).wait(20));

	// text
	this.instance_4 = new lib.animasi_welcome();
	this.instance_4.setTransform(357.25,126.05,1,1,0,0,0,242.7,47.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000099").s().p("AANBPQgZAgggAAQgVAAgMgPQgMgPAAgVQAAhFBjgFIAAgvQAAgTgEgHQgDgIgOAAQgLAAgHAEQgGAEAAAFQAAADAEAGQAFAHAAAJQAAAOgIAKQgIAJgLABQgLAAgIgKQgHgJAAgOQAAgXAUgPQAVgQAkAAQAcAAATAJQATAJAAAhIAABtQAAAdAMgBQADABAGgGIAFANQgQAZgWAAQgYAAgPgggAgaAKQgLAJAAAXQAAASAHAKQAGAKALAAQALAAAGgKQAGgJAAgdIAAghQgaABgKAKg");
	this.shape_3.setTransform(451.875,1030.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000099").s().p("AgrCrIAAgQIATAAIAAiwIgTAAIAAgQIAZAAQASAAAOgDIAPgDIAADGIAPAAIAAAQgAgThpQgJgMAAgPQAAgQAJgLQAIgLALAAQAMAAAJALQAIALAAAQQAAAPgIAMQgJALgMAAQgLAAgIgLg");
	this.shape_4.setTransform(436.225,1024.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000099").s().p("AhGCTQgTghAAgxQAAguAUgeQATgeAaAAQAWAAARAbIAAiQIgfAAIAAgQIAbAAQAKAAAWgCIAZgDIAAFRIAWAAIAAAPIgZAAIgWABIgXACIgFAAIAAgfIgBAAQgNAjgZAAQgaAAgUghgAgYgPQgEALAAAhIAABPQAAAgADALQADAMAIAAQAJAAAJgPQALgPAAgpIAAg3QAAghgJgPQgJgPgJAAQgIAAgEALg");
	this.shape_5.setTransform(420.975,1023.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000099").s().p("Ag3BNQgXgiAAgsQAAgrAXggQAXgiAhAAQAeAAAWAYQAWAYAEAyIhgAAIAAAiQAAAoAFAPQAFAPATAAQARAAAPgPQAPgOAIgfIAMAAQgIAogTATQgUAUgcAAQgkAAgXgigAgMhYQgFAHAAAgIAAAUIApAAIAAgVQAAgcgGgJQgGgJgKABQgIgBgGAIg");
	this.shape_6.setTransform(402.575,1030.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000099").s().p("AA9BsIAAgQIAXAAIAAiMQAAgagEgFQgEgGgHAAQgMAAgMAOQgMANgDARQgDAQAAAcIAABZIAXAAIAAAQIhjAAIAAgQIAXAAIAAiLQAAgZgEgGQgEgHgIAAQgNAAgOARQgNAQAAAuIAABiIAXAAIAAAQIhkAAIAAgQIAXAAIAAiwIgXAAIAAgQIAcAAQAPAAAOgEIAMgDIAIAAIAAAtIAAAAQATgtAqAAQArAAAFAvQAVgvAlAAQAXAAAMAJQALAIADAOQADANAAAUIAACHIAXAAIAAAQg");
	this.shape_7.setTransform(377.325,1030.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000099").s().p("AgrCxIAAgQIARAAIAAk8IgRAAIAAgQQAZAAAXgCIAQgDIAGAAIAAFRIARAAIAAAQg");
	this.shape_8.setTransform(345.5,1023.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000099").s().p("AANBPQgZAgggAAQgVAAgMgPQgMgPAAgVQAAhFBjgFIAAgvQAAgTgEgHQgDgIgOAAQgLAAgHAEQgGAEAAAFQAAADAEAGQAFAHAAAJQAAAOgIAKQgIAJgLABQgLAAgIgKQgHgJAAgOQAAgXAUgPQAVgQAkAAQAcAAATAJQATAJAAAhIAABtQAAAdAMgBQADABAGgGIAFANQgQAZgWAAQgYAAgPgggAgaAKQgLAJAAAXQAAASAHAKQAGAKALAAQALAAAGgKQAGgJAAgdIAAghQgaABgKAKg");
	this.shape_9.setTransform(330.325,1030.85);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000099").s().p("AgrCrIAAgQIATAAIAAiwIgTAAIAAgQIAZAAQASAAAOgDIAPgDIAADGIAPAAIAAAQgAgThpQgJgMAAgPQAAgQAJgLQAIgLALAAQAMAAAJALQAIALAAAQQAAAPgIAMQgJALgMAAQgLAAgIgLg");
	this.shape_10.setTransform(314.675,1024.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000099").s().p("AgqBZIgNAOIgJAAIAAhNIAMAAQANBEAqAAQAQAAALgKQAMgJAAgPQAAgLgGgHQgGgGgXgDQgWgEgOgGQgPgFgJgPQgJgPAAgaQAAgeAPgVQAQgVAcAAQATAAASAPIAJgPIAJAAIAABAIgMAAQgLgwgjAAQgOgBgKAKQgKAIAAANQAAAKAHAGQAIAGAfAEQAgAEANASQAOARAAAdQAAAkgRAWQgRAXgcAAQgbAAgSgWg");
	this.shape_11.setTransform(301.775,1030.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000099").s().p("Ag+BNQgYggAAgtQAAgrAYgiQAYghAmAAQAnAAAZAhQAXAhAAAsQAAAtgXAhQgZAhgnAAQgnAAgXgigAgQhaQgGAGgCAOQgBAOAAA4QAAA4ABAMQACAOAGAHQAHAIAKAAQAJAAAHgHQAHgGABgSQACgSAAgsQgBhCgEgSQgEgRgSAAQgJAAgHAHg");
	this.shape_12.setTransform(284.05,1030.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000099").s().p("AgqBZIgNAOIgJAAIAAhNIAMAAQANBEAqAAQAQAAALgKQAMgJAAgPQAAgLgGgHQgGgGgXgDQgWgEgOgGQgPgFgJgPQgJgPAAgaQAAgeAPgVQAQgVAcAAQATAAASAPIAJgPIAJAAIAABAIgMAAQgLgwgjAAQgOgBgKAKQgKAIAAANQAAAKAHAGQAIAGAfAEQAgAEANASQAOARAAAdQAAAkgRAWQgRAXgcAAQgbAAgSgWg");
	this.shape_13.setTransform(266.675,1030.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000099").s().p("AhxDhIAAgVIA7AAIAAmXIg7AAIAAgWIDjAAIAAAWIg8AAIAAGXIA8AAIAAAVg");
	this.shape_14.setTransform(570.1,822.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000099").s().p("AhTDKQgTAOgPAOIgWAAIAAiDIAaAAQAdBvBUAAQAsAAAYgbQAYgaAAghQAAgTgLgOQgKgPgOgJQgOgJg+gNQg/gNgegjQgdgkAAg2QAAg6AkgoQAkgoA1AAQAoAAApAdQANgIAPgMIAVAAIAGB5IgbAAQgVg8gbgYQgagYglAAQghAAgUAVQgVAUAAAbQAAAiAWAMQAVANA1ALQBSASAcAkQAcAjAAA3QAABBglAvQglAvhDAAQguAAgmgeg");
	this.shape_15.setTransform(519.275,822.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000099").s().p("ACFDlIkHmMIAAFFQAAAbAGAIQAGAIAZAAIAaAAIAAAVIiNAAIAAgVIASAAQAbgBAFgIQAFgKAAgnIAAk2QAAgagEgGQgFgHgYAAIgYAAIAAgWICoAAICwEJIAAjCQAAgegGgJQgGgKgaAAIgVAAIAAgWICIAAIAAAWIgQAAQgZAAgHAIQgGAIAAAXIAAGMg");
	this.shape_16.setTransform(459.175,822.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000099").s().p("AAIDmIAAgWIA7AAIgnhoIiLAAIgSAuQgMAcAAAMQAAASAhAAIAZAAIAAAWIiPAAIAAgWIAMAAQAaAAAJgJQAJgJANggICcmDIASAAICkG1IAuAAIAAAWgAhmBQIB6AAIg6ibg");
	this.shape_17.setTransform(392.125,821.875);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000099").s().p("Ah3DhIAAgVIBFAAIAAi2Ih/jhIgfAAIAAgWIDQAAIAAAWIg0AAIBjC/IBNiYIAFgOQAFgKAAgEQAAgLgVAAIgSAAIAAgWIByAAIAAAWQgbAAgKAHQgJAGgMAaIhdC0IAAC8IBFAAIAAAVg");
	this.shape_18.setTransform(325.2,822.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000099").s().p("AhxDhIAAgVIA7AAIAAmXIg7AAIAAgWIDjAAIAAAWIg9AAIAAGXIA9AAIAAAVg");
	this.shape_19.setTransform(268.8,822.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000099").s().p("ABHDJQgfgbgChFQgChFgQgUQgQgVgoABIgYAAIAADPIA6AAIAAAVIjfAAIAAgVIA4AAIAAmXIg4AAIAAgWIDfAAQBqAAAoAiQAnAhAAAmQAAApgkAcQgkAchIAKIAAABQA2ANAbAXQAbAWAHAcQAGAcABAmQAAAlAGAKQAGAJAQAAQARAAAUgLIAAAaQggAQgoAAQg0AAgfgZgAg8gbIAqAAQArAAARgQQARgQAAg7QAAg4gQgPQgQgPgnAAIgwAAg");
	this.shape_20.setTransform(210.925,822.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000099").s().p("AAIDmIAAgWIA7AAIgnhoIiLAAIgSAuQgMAcAAAMQAAASAhAAIAZAAIAAAWIiPAAIAAgWIAMAAQAaAAAJgJQAJgJANggICcmDIASAAICkG1IAuAAIAAAWgAhmBQIB6AAIg6ibg");
	this.shape_21.setTransform(142.025,821.875);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000099").s().p("AhSCIQggg3AAhRQAAhUAjg1QAig2AuAAQAsAAAjAyQAjAyAABcQAABWggA1QgiA0gvAAQgzAAghg4gAgbifQgKAOgDAdQgCAeAABWQAABVACAcQACAcAJAQQAKARAUAAQAQAAALgNQAKgOADgeQADgdAAhYQAAhUgDgcQgBgbgJgRQgKgQgUAAQgSAAgKANg");
	this.shape_22.setTransform(484.2,731.525);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000099").s().p("AhBC7IAAgSIAiAAIAAlRIgiAAIAAgSICDAAIAAASIgjAAIAAFRIAjAAIAAASg");
	this.shape_23.setTransform(456.625,731.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000099").s().p("AhtC7IAAgSIAjAAIAAlRIgjAAIAAgSICHAAIAAASIglAAIAAFRIAXAAQAVgBAKgDQAJgDALgPQANgOAHgXQAIgXAHgbIAMAAIgEB/g");
	this.shape_24.setTransform(429.9,731.55);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000099").s().p("AhSCIQggg3AAhRQAAhUAig1QAig2AvAAQAtAAAiAyQAjAyAABcQAABWggA1QgiA0gvAAQgzAAghg4gAgbifQgKAOgCAdQgDAeAABWQAABVACAcQACAcAJAQQAKARATAAQARAAALgNQALgOACgeQADgdAAhYQAAhUgDgcQgCgbgIgRQgKgQgVAAQgQAAgLANg");
	this.shape_25.setTransform(398.15,731.525);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000099").s().p("AhsC7IAAgSIAhAAIAAlRIghAAIAAgSIDXAAIACByIgOAAQgNhgg3AAIgnAAIAACeIAGAAQAsAAAEhDIAOAAIAACZIgMAAQgCgcgKgUQgMgWgaABIgGAAIAACiIAkAAIAAASg");
	this.shape_26.setTransform(366.275,731.55);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000099").s().p("AhFC7IAAgSIAnAAIAAlRIgGAAQgtAAgOBoIgMAAIABh6IDUAAIACB6IgMAAQgOhogtAAIgFAAIAAFRIAmAAIAAASg");
	this.shape_27.setTransform(335.4,731.55);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000099").s().p("AApCmQgSgWgBg5QgCg5gIgRQgKgRgXAAIgNAAIAACsIAhAAIAAASIiBAAIAAgSIAiAAIAAlQIgiAAIAAgSICBAAQA+AAAWAbQAWAcAAAfQAAAhgUAYQgVAYgpAHIAAABQAfALAPATQAQASAEAXQADAXABAgQAAAfADAIQAEAHAJAAQAKAAALgJIAAAVQgSAOgXAAQgeAAgSgVgAgigWIAYAAQAZAAAJgNQAKgOAAgwQAAgugJgNQgKgMgVAAIgcAAg");
	this.shape_28.setTransform(302.5,731.625);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000099").s().p("AhSCIQggg3AAhRQAAhUAig1QAig2AvAAQAtAAAiAyQAjAyAABcQAABWggA1QgiA0gvAAQgzAAghg4gAgbifQgKAOgCAdQgDAeAABWQAABVACAcQACAcAJAQQAKARATAAQARAAALgNQALgOACgeQADgdAAhYQAAhUgDgcQgCgbgIgRQgKgQgVAAQgQAAgLANg");
	this.shape_29.setTransform(268.55,731.525);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000099").s().p("AhuC7IAAgSIAgAAIAAlRIggAAIAAgSIB5AAQA2ABAXAdQAXAeAAAnQAAAogZAeQgaAdhAAAIgLAAIAACdIAkAAIAAASgAgPgFIANAAQAQAAAJgEQAJgEAHgSQAFgSAAgmQAAgmgFgRQgHgSgJgDQgJgFgQAAIgNAAg");
	this.shape_30.setTransform(236.6,731.55);

	this.instance_5 = new lib.Tween59("synched",0);
	this.instance_5.setTransform(361.4,529.45);
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween60("synched",0);
	this.instance_6.setTransform(361.4,529.45);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},24).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},15).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(24).to({_off:false},0).to({startPosition:0},1).to({_off:true,alpha:0},15).wait(20));

	// logo
	this.instance_7 = new lib.animasi_logo();
	this.instance_7.setTransform(243,291.25);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(25).to({alpha:0},15).wait(20));

	// tombol
	this.buton_github = new lib.buton_github();
	this.buton_github.name = "buton_github";
	this.buton_github.setTransform(581.9,1097.6,1,1,0,0,0,70,17.6);
	new cjs.ButtonHelper(this.buton_github, 0, 1, 1);

	this.buton_instagram = new lib.buton_instagram();
	this.buton_instagram.name = "buton_instagram";
	this.buton_instagram.setTransform(360,1098.6,1,1,0,0,0,88,18.6);
	new cjs.ButtonHelper(this.buton_instagram, 0, 1, 1);

	this.buton_facebook = new lib.buton_facebook();
	this.buton_facebook.name = "buton_facebook";
	this.buton_facebook.setTransform(137.05,1097.75,1,1,0,0,0,69,19);
	new cjs.ButtonHelper(this.buton_facebook, 0, 1, 1);

	this.button_1 = new lib.btn_portfolio();
	this.button_1.name = "button_1";
	this.button_1.setTransform(359.8,908.95,1,1,0,0,0,155.4,27.8);
	new cjs.ButtonHelper(this.button_1, 0, 1, 1);

	this.movieClip_3 = new lib.Symbol3();
	this.movieClip_3.name = "movieClip_3";
	this.movieClip_3.setTransform(359.95,999.15,1,1,0,0,0,0,0.2);
	this.movieClip_3._off = true;

	this.instance_8 = new lib.Tween61("synched",0);
	this.instance_8.setTransform(359.95,998.95);
	this.instance_8.alpha = 0.8008;
	this.instance_8._off = true;

	this.movieClip_2 = new lib.Symbol1();
	this.movieClip_2.name = "movieClip_2";
	this.movieClip_2.setTransform(359.95,999.15,1,1,0,0,0,0,0.2);
	this.movieClip_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button_1},{t:this.buton_facebook},{t:this.buton_instagram},{t:this.buton_github}]}).to({state:[{t:this.movieClip_3}]},24).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.movieClip_2}]},15).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.movieClip_3).wait(24).to({_off:false},0).to({_off:true,regY:0,y:998.95,alpha:0.8008,mode:"synched",startPosition:0},1).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(24).to({_off:false},1).to({_off:true,regY:0.2,y:999.15,alpha:0,mode:"independent"},15).wait(20));

	// beground
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgsAyQgPgUAAgeQAAgfARgTQASgTAYAAQAcAAAQAUQAQAUAAAdQAAAfgSAUQgRATgaAAQgbAAgQgUgAgagnQgKAMAAAbQAAAcAKANQALAMAPAAQAQAAAKgNQALgNAAgbQAAgbgLgMQgLgNgPAAQgPAAgLANg");
	this.shape_31.setTransform(436.625,1210.625);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgOAPIAAgdIAdAAIAAAdg");
	this.shape_32.setTransform(426.225,1215.825);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ag+BcIAAgRIA2AAIAAiKQgYAZgaAOIAAgXQAkgSATgaIAQAAIAACmIAyAAIAAARg");
	this.shape_33.setTransform(415.8,1208.125);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAiBFIAAhVQAAgTgJgHQgIgIgLAAQgPAAgLANQgLANABAUIAABJIgWAAIAAiEIAUAAIAAAYQAQgdAZAAQAPABALAHQAKAIAEAJQADALABAYIAABNg");
	this.shape_34.setTransform(392.9,1210.45);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgsAyQgPgUAAgeQAAgfARgTQASgTAYAAQAcAAAQAUQAQAUAAAdQAAAfgSAUQgRATgaAAQgbAAgQgUgAgagnQgKAMAAAbQAAAcAKANQALAMAPAAQAQAAAKgNQALgNAAgbQAAgbgLgMQgLgNgPAAQgPAAgLANg");
	this.shape_35.setTransform(378.575,1210.625);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgKBaIAAiEIAVAAIAACEgAgKhCIAAgXIAVAAIAAAXg");
	this.shape_36.setTransform(368.45,1208.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("Ag4AgIAUgEQAGAZAiAAQANAAAJgFQAJgGAAgLQAAgQgXgEIgbgFQgRgDgJgIQgKgKAAgPQAAgRANgLQAOgLAWAAQArAAAKAiIgTAEQgJgVgXAAQgNAAgJAFQgHAFgBAKQABAPAUADIAZAFQApAHAAAfQAAATgQALQgOALgZAAQgvAAgLgmg");
	this.shape_37.setTransform(358.85,1210.625);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AggBFIAAiEIATAAIAAAeQAJgVAJgHQAKgHAKAAIAIABIAAATIgEAAQgRAAgMAOQgKANgBAUIAABGg");
	this.shape_38.setTransform(349.275,1210.45);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgqAzQgRgTAAgfQAAgfASgTQARgUAaAAQAaAAAQASQAPASABAjIhgAAQAAAeANALQAMAKAOAAQAZAAAKgaIAUAEQgGARgPALQgPALgVAAQgaAAgRgTgAgXgqQgLALgBATIBIAAQAAgMgDgIQgEgJgIgGQgIgGgMAAQgOAAgLALg");
	this.shape_39.setTransform(336.925,1210.625);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgJBDIgwiEIAXAAIAlBrIAkhrIATAAIgvCEg");
	this.shape_40.setTransform(323.825,1210.65);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("Ag4BbIAAixIATAAIAAAZQAOgdAbAAQAYAAAOAUQAPAUAAAeQAAAfgPATQgPATgXAAQgYAAgPgXIAABBgAgWg+QgKAJgDAOIAAAmQACAOALAJQALAKALAAQANAAALgMQAKgLAAgcQAAgZgJgOQgKgOgPAAQgMAAgKAKg");
	this.shape_41.setTransform(304.325,1212.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("Ag4BbIAAixIATAAIAAAZQAOgdAbAAQAYAAAOAUQAPAUAAAeQAAAfgPATQgPATgXAAQgYAAgPgXIAABBgAgWg+QgKAJgDAOIAAAmQACAOALAJQALAKALAAQANAAALgMQAKgLAAgcQAAgZgJgOQgKgOgPAAQgMAAgKAKg");
	this.shape_42.setTransform(289.925,1212.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgtA7QgMgMAAgRQAAgUARgMQARgNApAAIARAAQAAgPgDgHQgCgIgIgEQgHgEgNAAQgfAAgFAYIgTgDQAGglAzAAQAcAAALAMQAMAMAAAeIAAA4QAAAOADAMIgUAAQgCgHgBgRQgNAbghAAQgWAAgMgLgAgWAHQgNAIAAAQQAAAKAHAHQAIAGAOAAQARAAAMgNQANgOAAgSIgBgJIgTAAQgYAAgOAHg");
	this.shape_43.setTransform(274.6,1210.625);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgOAPIAAgdIAdAAIAAAdg");
	this.shape_44.setTransform(264.525,1215.825);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("Ag0BYIAAgRQAIACAGAAQAKAAAGgFQAHgGAHgWIguiBIAVAAIAiBjIAlhjIARAAIg1CTQgLAggZAAQgIAAgKgCg");
	this.shape_45.setTransform(255.675,1213.025);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgtA7QgMgMAAgRQAAgUARgMQARgNApAAIARAAQAAgPgDgHQgCgIgIgEQgHgEgNAAQgfAAgFAYIgTgDQAGglAzAAQAcAAAMAMQALAMAAAeIAAA4QAAAOADAMIgVAAQgBgHgBgRQgOAbgfAAQgXAAgMgLgAgWAHQgNAIAAAQQAAAKAIAHQAGAGAOAAQATAAALgNQAMgOABgSIgBgJIgTAAQgYAAgOAHg");
	this.shape_46.setTransform(242.4,1210.625);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("rgba(0,0,51,0.376)").ss(1,1,1).p("A/2jvMA/tAAAQBTAAA7A7QA6A6AABTIAABPQAABTg6A7Qg7A6hTAAMg/tAAAQhTAAg7g6Qg6g7AAhTIAAhPQAAhTA6g6QA7g7BTAAg");
	this.shape_47.setTransform(339.675,1210.55);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000099").s().p("EgjCBgdQhTAAg6g7Qg6g6gBhTIAAhQQABhTA6g7QA6g6BTAAMA/uAAAQBTAAA6A6QA7A7AABTIAABQQAABTg7A6Qg6A7hTAAgEg4PADjMAAAhj/MBwfAAAMAAABj/g");
	this.shape_48.setTransform(360,617.275);

	this.instance_9 = new lib.Tween63("synched",0);
	this.instance_9.setTransform(360,617.25);
	this.instance_9._off = true;

	this.instance_10 = new lib.Tween64("synched",0);
	this.instance_10.setTransform(360,617.25);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]}).to({state:[{t:this.instance_9}]},24).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},15).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(24).to({_off:false},0).to({startPosition:0},1).to({_off:true,alpha:0},15).wait(20));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(359,636.3,361.79999999999995,599.3);
// library properties:
lib.properties = {
	id: '526ADB1376A08748908545286F42BC5D',
	width: 720,
	height: 1280,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['526ADB1376A08748908545286F42BC5D'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;