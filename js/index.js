/**
 * @author qiao / //github.com/qiao
 * @author mrdoob / //mrdoob.com
 * @author alteredq / //alteredqualia.com/
 * @author WestLangley / //github.com/WestLangley
 * @author erich666 / //erichaines.com
 */
THREE.OrbitControls=function(a,b){function x(){return 2*Math.PI/60/60*c.autoRotateSpeed}function y(){return Math.pow(.95,c.zoomSpeed)}function z(a){k.theta-=a}function A(a){k.phi-=a}function E(a){c.object.isPerspectiveCamera?l/=a:c.object.isOrthographicCamera?(c.object.zoom=Math.max(c.minZoom,Math.min(c.maxZoom,c.object.zoom*a)),c.object.updateProjectionMatrix(),n=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),c.enableZoom=!1)}function F(a){c.object.isPerspectiveCamera?l*=a:c.object.isOrthographicCamera?(c.object.zoom=Math.max(c.minZoom,Math.min(c.maxZoom,c.object.zoom/a)),c.object.updateProjectionMatrix(),n=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),c.enableZoom=!1)}function G(a){o.set(a.clientX,a.clientY)}function H(a){u.set(a.clientX,a.clientY)}function I(a){r.set(a.clientX,a.clientY)}function J(a){p.set(a.clientX,a.clientY),q.subVectors(p,o).multiplyScalar(c.rotateSpeed);var b=c.domElement===document?c.domElement.body:c.domElement;z(2*Math.PI*q.x/b.clientHeight),A(2*Math.PI*q.y/b.clientHeight),o.copy(p),c.update()}function K(a){v.set(a.clientX,a.clientY),w.subVectors(v,u),w.y>0?E(y()):w.y<0&&F(y()),u.copy(v),c.update()}function L(a){s.set(a.clientX,a.clientY),t.subVectors(s,r).multiplyScalar(c.panSpeed),D(t.x,t.y),r.copy(s),c.update()}function M(a){}function N(a){a.deltaY<0?F(y()):a.deltaY>0&&E(y()),c.update()}function O(a){var b=!1;switch(a.keyCode){case c.keys.UP:D(0,c.keyPanSpeed),b=!0;break;case c.keys.BOTTOM:D(0,-c.keyPanSpeed),b=!0;break;case c.keys.LEFT:D(c.keyPanSpeed,0),b=!0;break;case c.keys.RIGHT:D(-c.keyPanSpeed,0),b=!0}b&&(a.preventDefault(),c.update())}function P(a){o.set(a.touches[0].pageX,a.touches[0].pageY)}function Q(a){if(c.enableZoom){var b=a.touches[0].pageX-a.touches[1].pageX,d=a.touches[0].pageY-a.touches[1].pageY,e=Math.sqrt(b*b+d*d);u.set(0,e)}if(c.enablePan){var f=.5*(a.touches[0].pageX+a.touches[1].pageX),g=.5*(a.touches[0].pageY+a.touches[1].pageY);r.set(f,g)}}function R(a){p.set(a.touches[0].pageX,a.touches[0].pageY),q.subVectors(p,o).multiplyScalar(c.rotateSpeed);var b=c.domElement===document?c.domElement.body:c.domElement;z(2*Math.PI*q.x/b.clientHeight),A(2*Math.PI*q.y/b.clientHeight),o.copy(p),c.update()}function S(a){if(c.enableZoom){var b=a.touches[0].pageX-a.touches[1].pageX,d=a.touches[0].pageY-a.touches[1].pageY,e=Math.sqrt(b*b+d*d);v.set(0,e),w.set(0,Math.pow(v.y/u.y,c.zoomSpeed)),E(w.y),u.copy(v)}if(c.enablePan){var f=.5*(a.touches[0].pageX+a.touches[1].pageX),g=.5*(a.touches[0].pageY+a.touches[1].pageY);s.set(f,g),t.subVectors(s,r).multiplyScalar(c.panSpeed),D(t.x,t.y),r.copy(s)}c.update()}function T(a){}function U(a){if(!1!==c.enabled){switch(a.preventDefault(),c.domElement.focus?c.domElement.focus():window.focus(),a.button){case c.mouseButtons.LEFT:if(a.ctrlKey||a.metaKey||a.shiftKey){if(!1===c.enablePan)return;I(a),h=g.PAN}else{if(!1===c.enableRotate)return;G(a),h=g.ROTATE}break;case c.mouseButtons.MIDDLE:if(!1===c.enableZoom)return;H(a),h=g.DOLLY;break;case c.mouseButtons.RIGHT:if(!1===c.enablePan)return;I(a),h=g.PAN}h!==g.NONE&&(document.addEventListener("mousemove",V,!1),document.addEventListener("mouseup",W,!1),c.dispatchEvent(e))}}function V(a){if(!1!==c.enabled)switch(a.preventDefault(),h){case g.ROTATE:if(!1===c.enableRotate)return;J(a);break;case g.DOLLY:if(!1===c.enableZoom)return;K(a);break;case g.PAN:if(!1===c.enablePan)return;L(a)}}function W(a){!1!==c.enabled&&(M(a),document.removeEventListener("mousemove",V,!1),document.removeEventListener("mouseup",W,!1),c.dispatchEvent(f),h=g.NONE)}function X(a){!1===c.enabled||!1===c.enableZoom||h!==g.NONE&&h!==g.ROTATE||(a.preventDefault(),a.stopPropagation(),c.dispatchEvent(e),N(a),c.dispatchEvent(f))}function Y(a){!1!==c.enabled&&!1!==c.enableKeys&&!1!==c.enablePan&&O(a)}function Z(a){if(!1!==c.enabled){switch(a.preventDefault(),a.touches.length){case 1:if(!1===c.enableRotate)return;P(a),h=g.TOUCH_ROTATE;break;case 2:if(!1===c.enableZoom&&!1===c.enablePan)return;Q(a),h=g.TOUCH_DOLLY_PAN;break;default:h=g.NONE}h!==g.NONE&&c.dispatchEvent(e)}}function $(a){if(!1!==c.enabled)switch(a.preventDefault(),a.stopPropagation(),a.touches.length){case 1:if(!1===c.enableRotate)return;if(h!==g.TOUCH_ROTATE)return;R(a);break;case 2:if(!1===c.enableZoom&&!1===c.enablePan)return;if(h!==g.TOUCH_DOLLY_PAN)return;S(a);break;default:h=g.NONE}}function _(a){!1!==c.enabled&&(T(a),c.dispatchEvent(f),h=g.NONE)}function aa(a){!1!==c.enabled&&a.preventDefault()}this.object=a,this.domElement=void 0!==b?b:document,this.enabled=!0,this.target=new THREE.Vector3,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.25,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!1,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.enableKeys=!0,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},this.mouseButtons={LEFT:THREE.MOUSE.LEFT,MIDDLE:THREE.MOUSE.MIDDLE,RIGHT:THREE.MOUSE.RIGHT},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=function(){return j.phi},this.getAzimuthalAngle=function(){return j.theta},this.saveState=function(){c.target0.copy(c.target),c.position0.copy(c.object.position),c.zoom0=c.object.zoom},this.reset=function(){c.target.copy(c.target0),c.object.position.copy(c.position0),c.object.zoom=c.zoom0,c.object.updateProjectionMatrix(),c.dispatchEvent(d),c.update(),h=g.NONE},this.update=function(){var b=new THREE.Vector3,e=(new THREE.Quaternion).setFromUnitVectors(a.up,new THREE.Vector3(0,1,0)),f=e.clone().inverse(),o=new THREE.Vector3,p=new THREE.Quaternion;return function(){var q=c.object.position;return b.copy(q).sub(c.target),b.applyQuaternion(e),j.setFromVector3(b),c.autoRotate&&h===g.NONE&&z(x()),j.theta+=k.theta,j.phi+=k.phi,j.theta=Math.max(c.minAzimuthAngle,Math.min(c.maxAzimuthAngle,j.theta)),j.phi=Math.max(c.minPolarAngle,Math.min(c.maxPolarAngle,j.phi)),j.makeSafe(),j.radius*=l,j.radius=Math.max(c.minDistance,Math.min(c.maxDistance,j.radius)),c.target.add(m),b.setFromSpherical(j),b.applyQuaternion(f),q.copy(c.target).add(b),c.object.lookAt(c.target),!0===c.enableDamping?(k.theta*=1-c.dampingFactor,k.phi*=1-c.dampingFactor,m.multiplyScalar(1-c.dampingFactor)):(k.set(0,0,0),m.set(0,0,0)),l=1,!!(n||o.distanceToSquared(c.object.position)>i||8*(1-p.dot(c.object.quaternion))>i)&&(c.dispatchEvent(d),o.copy(c.object.position),p.copy(c.object.quaternion),n=!1,!0)}}(),this.dispose=function(){c.domElement.removeEventListener("contextmenu",aa,!1),c.domElement.removeEventListener("mousedown",U,!1),c.domElement.removeEventListener("wheel",X,!1),c.domElement.removeEventListener("touchstart",Z,!1),c.domElement.removeEventListener("touchend",_,!1),c.domElement.removeEventListener("touchmove",$,!1),document.removeEventListener("mousemove",V,!1),document.removeEventListener("mouseup",W,!1),window.removeEventListener("keydown",Y,!1)};var c=this,d={type:"change"},e={type:"start"},f={type:"end"},g={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_DOLLY_PAN:4},h=g.NONE,i=1e-6,j=new THREE.Spherical,k=new THREE.Spherical,l=1,m=new THREE.Vector3,n=!1,o=new THREE.Vector2,p=new THREE.Vector2,q=new THREE.Vector2,r=new THREE.Vector2,s=new THREE.Vector2,t=new THREE.Vector2,u=new THREE.Vector2,v=new THREE.Vector2,w=new THREE.Vector2,B=function(){var a=new THREE.Vector3;return function(c,d){a.setFromMatrixColumn(d,0),a.multiplyScalar(-c),m.add(a)}}(),C=function(){var a=new THREE.Vector3;return function(d,e){!0===c.screenSpacePanning?a.setFromMatrixColumn(e,1):(a.setFromMatrixColumn(e,0),a.crossVectors(c.object.up,a)),a.multiplyScalar(d),m.add(a)}}(),D=function(){var a=new THREE.Vector3;return function(d,e){var f=c.domElement===document?c.domElement.body:c.domElement;if(c.object.isPerspectiveCamera){var g=c.object.position;a.copy(g).sub(c.target);var h=a.length();h*=Math.tan(c.object.fov/2*Math.PI/180),B(2*d*h/f.clientHeight,c.object.matrix),C(2*e*h/f.clientHeight,c.object.matrix)}else c.object.isOrthographicCamera?(B(d*(c.object.right-c.object.left)/c.object.zoom/f.clientWidth,c.object.matrix),C(e*(c.object.top-c.object.bottom)/c.object.zoom/f.clientHeight,c.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),c.enablePan=!1)}}();c.domElement.addEventListener("contextmenu",aa,!1),c.domElement.addEventListener("mousedown",U,!1),c.domElement.addEventListener("wheel",X,!1),c.domElement.addEventListener("touchstart",Z,!1),c.domElement.addEventListener("touchend",_,!1),c.domElement.addEventListener("touchmove",$,!1),window.addEventListener("keydown",Y,!1),this.update()},THREE.OrbitControls.prototype=Object.create(THREE.EventDispatcher.prototype),THREE.OrbitControls.prototype.constructor=THREE.OrbitControls,Object.defineProperties(THREE.OrbitControls.prototype,{center:{get:function(){return console.warn("THREE.OrbitControls: .center has been renamed to .target"),this.target}},noZoom:{get:function(){return console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),!this.enableZoom},set:function(a){console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),this.enableZoom=!a}},noRotate:{get:function(){return console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."),!this.enableRotate},set:function(a){console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."),this.enableRotate=!a}},noPan:{get:function(){return console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."),!this.enablePan},set:function(a){console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."),this.enablePan=!a}},noKeys:{get:function(){return console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."),!this.enableKeys},set:function(a){console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."),this.enableKeys=!a}},staticMoving:{get:function(){return console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."),!this.enableDamping},set:function(a){console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."),this.enableDamping=!a}},dynamicDampingFactor:{get:function(){return console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."),this.dampingFactor},set:function(a){console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."),this.dampingFactor=a}}});

//==============================================
//==============================================
//==============================================
//==============================================



( function( $ ) {
"use strict";

    $( function() {
		

	
		
		//Prevent this module from loading in other pages
		if ( $( '.uix-3d-slider--expParticle' ).length == 0 || ! Modernizr.webgl ) return false;
		
		
		var MainStage = function() {

			var $window                   = $( window ),
				windowWidth               = window.innerWidth,
				windowHeight              = window.innerHeight;


			var animSpeed                 = 1000,
				$sliderWrapper            = $( '.uix-3d-slider--expParticle' ),



				//Basic webGL renderers 
				renderLoaderID            = 'uix-3d-slider--expParticle__loader',
				rendererOuterID           = 'uix-3d-slider--expParticle__canvas-container',
				rendererCanvasID          = 'uix-3d-slider--expParticle__canvas',
				renderer;



			// Generate one plane geometries mesh to scene
			//-------------------------------------	
			var camera,
				controls,
				scene,
				light,
				renderer,
				material,
				displacementSprite,
				clock = new THREE.Clock();


			var offsetWidth   = 475, //Set the display width of the objects in the Stage
				offsetHeight  = 375, //Set the display height of the objects in the Stage
				allSources    = [],
				objTotal,
				objLoaded = false;

		
			
			var sources = [];
			var isAnimating = false;
			
			
			// constants
			var activeSlider = 0;
			
			var cube_count,
				meshes = [],
				materials = [],
				xgrid = 25,
				ygrid = 15;
			
			
			function wrapperInit() {
				
				$sliderWrapper.each( function()  {

					var $this                    = $( this ),
						$items                   = $this.find( '.uix-3d-slider--expParticle__item' ),
						$first                   = $items.first(),
						itemsTotal               = $items.length,
						dataControlsPagination   = $this.data( 'controls-pagination' ),
						dataControlsArrows       = $this.data( 'controls-arrows' ),
						dataLoop                 = $this.data( 'loop' ),
						dataFilterTexture        = $this.data( 'filter-texture' ),
						dataDraggable            = $this.data( 'draggable' ),
						dataDraggableCursor      = $this.data( 'draggable-cursor' );


					if ( typeof dataControlsPagination === typeof undefined ) dataControlsPagination = '.uix-3d-slider--expParticle__pagination';
					if ( typeof dataControlsArrows === typeof undefined || dataControlsArrows == false ) dataControlsArrows = '.uix-3d-slider--expParticle__arrows';
					if ( typeof dataLoop === typeof undefined ) dataLoop = false;
					if ( typeof dataFilterTexture === typeof undefined || !dataFilterTexture || dataFilterTexture == '' ) dataFilterTexture = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
					if ( typeof dataDraggable === typeof undefined ) dataDraggable = false;
					if ( typeof dataDraggableCursor === typeof undefined ) dataDraggableCursor = 'move';
					
					

					//Autoplay times
					var playTimes;
					//A function called "timer" once every second (like a digital watch).
					$this[0].animatedSlides;

					

					//If arrows does not exist on the page, it will be added by default, 
					//and the drag and drop function will be activated.
					if ( $( dataControlsArrows ).length == 0 ) {
						$( 'body' ).prepend( '<div style="display:none;" class="uix-3d-slider--expParticle__arrows '+dataControlsArrows.replace('#','').replace('.','')+'"><a href="#" class="uix-3d-slider--expParticle__arrows--prev"></a><a href="#" class="uix-3d-slider--expParticle__arrows--next"></a></div>' );
					}



					//Prevent bubbling
					if ( itemsTotal == 1 ) {
						$( dataControlsPagination ).hide();
						$( dataControlsArrows ).hide();
					}

					
					//Initialize the controlers classes
					//-------------------------------------	
					$( dataControlsPagination ).find( 'ul > li' ).first().addClass( 'active' );


					
					
					//Initialize the wrapper width and height
					//-------------------------------------	
					$this.css( 'height', windowHeight + 'px' );
					

					//Load slides to canvas
					//-------------------------------------	
					if ( $( '#' + rendererCanvasID ).length == 0 ) {
						$this.prepend( '<div id="'+rendererOuterID+'" class="uix-advanced-slider-sp__canvas-container"><canvas id="'+rendererCanvasID+'"></canvas></div>' );

					}

					
					//Get the animation speed
					//-------------------------------------	
					if ( typeof $this.data( 'speed' ) != typeof undefined && $this.data( 'speed' ) != false ) {
						animSpeed = $this.data( 'speed' );
					}


					//Initialize the first item container
					//-------------------------------------		
					$items.addClass( 'next' );
					$first.addClass( 'active' );



					//Get all images and videos
					//-------------------------------------		
					$items.each( function()  {
						var _item = $( this );
						
						if ( _item.find( 'video' ).length > 0 ) {

							//Returns the dimensions (intrinsic height and width ) of the video
							var video    = document.getElementById( _item.find( 'video' ).attr( 'id' ) ),
								videoURL = _item.find( 'source:first' ).attr( 'src' );

							if ( typeof videoURL != typeof undefined ) {
								sources.push(
									{
										"url": videoURL,
										"id": _item.find( 'video' ).attr( 'id' ),
										"type": 'video'
									}
								);
							}




						} else {

							var imgURL   = _item.find( 'img' ).attr( 'src' );

							if ( typeof imgURL != typeof undefined ) {

								sources.push(
									{
										"url": imgURL,
										"id": 'img-' + Math.random * 10000000000000,
										"type": 'img'
									}
								);
							}


						}	

					});
					
					

					//Pagination dots 
					//-------------------------------------	
					var _dot       = '',
						_dotActive = '';
					_dot += '<ul>';
					for ( var i = 0; i < itemsTotal; i++ ) {

						_dotActive = ( i == 0 ) ? 'class="active"' : '';

						_dot += '<li '+_dotActive+' data-index="'+i+'"><a href="javascript:"></a></li>';
					}
					_dot += '</ul>';

					if ( $( dataControlsPagination ).html() == '' ) $( dataControlsPagination ).html( _dot );

					
					//Fire the slider transtion with buttons
					$( dataControlsPagination ).find( 'ul > li' ).on( 'click', function( e ) {
						e.preventDefault();

						var slideCurId  = $( dataControlsPagination ).find( 'ul > li.active' ).index(),
							slideNextId = $( this ).index();


						//Determine the direction
						var curDir = 'prev';
						if ( $( this ).attr( 'data-index' ) > slideCurId ) {
							curDir = 'next';
						}


						//Transition Between Slides
						sliderUpdates( slideCurId, slideNextId, curDir );


						//Pause the auto play event
						clearInterval( $this[0].animatedSlides );	


					});

					//Next/Prev buttons
					//-------------------------------------		
					var _prev = $( dataControlsArrows ).find( '.uix-3d-slider--expParticle__arrows--prev' ),
						_next = $( dataControlsArrows ).find( '.uix-3d-slider--expParticle__arrows--next' );

					$( dataControlsArrows ).find( 'a' ).attr( 'href', 'javascript:' );

					$( dataControlsArrows ).find( 'a' ).removeClass( 'disabled' );
					if ( !dataLoop ) {
						_prev.addClass( 'disabled' );
					}


					_prev.on( 'click', function( e ) {
						e.preventDefault();

						var slideCurId  = $items.filter( '.active' ).index(),
							slideNextId = parseFloat( $items.filter( '.active' ).index() ) - 1;
	
						//Transition Between Slides
						sliderUpdates( slideCurId, slideNextId, 'prev' );	
						
						


						//Pause the auto play event
						clearInterval( $this[0].animatedSlides );

					});

					_next.on( 'click', function( e ) {
						e.preventDefault();

						var slideCurId  = $items.filter( '.active' ).index(),
							slideNextId = parseFloat( $items.filter( '.active' ).index() ) + 1;
	
						//Transition Between Slides
						sliderUpdates( slideCurId, slideNextId, 'next' );	


						//Pause the auto play event
						clearInterval( $this[0].animatedSlides );


					});
					

					
					//Autoplay Slider
					//-------------------------------------		
					var dataAuto                 = $this.data( 'auto' ),
						dataTiming               = $this.data( 'timing' ),
						dataLoop                 = $this.data( 'loop' );

					if ( typeof dataAuto === typeof undefined ) dataAuto = false;	
					if ( typeof dataTiming === typeof undefined ) dataTiming = 10000;
					if ( typeof dataLoop === typeof undefined ) dataLoop = false;


					if ( dataAuto && !isNaN( parseFloat( dataTiming ) ) && isFinite( dataTiming ) ) {

						sliderAutoPlay( playTimes, dataTiming, dataLoop, $this );

						$this.on({
							mouseenter: function() {
								clearInterval( $this[0].animatedSlides );
							},
							mouseleave: function() {
								sliderAutoPlay( playTimes, dataTiming, dataLoop, $this );
							}
						});	

					}


				});// end each				
			}


			
			function init() {

				

				//Core 3D stage begin
				//-------------------------------------		
				//camera
				camera = new THREE.PerspectiveCamera( 55, window.innerWidth / window.innerHeight, 10,  2500 ); // FlyCamera // FlyControls
				camera.movementSpeed = 100.0;
				camera.rollSpeed = 0.5;
				camera.position.y = 60;
				camera.position.z = 500;



				//Scene
				scene = new THREE.Scene();


				//HemisphereLight
				scene.add( new THREE.AmbientLight( 0x555555 ) );

				light = new THREE.SpotLight( 0xffffff, 1.5 );
				light.position.set( 0, 0, 2000 );
				scene.add( light );



				//WebGL Renderer	
				 // create a render and set the size
				renderer = new THREE.WebGLRenderer( { 
										canvas   : document.getElementById( rendererCanvasID ), //canvas
										alpha    : true, 
										antialias: true 
									} );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );

				//controls
				controls = new THREE.OrbitControls( camera, renderer.domElement );
				controls.autoRotate = false;
				controls.autoRotateSpeed = 0.5;
				controls.rotateSpeed = 0.5;
				controls.zoomSpeed = 1.2;
				controls.panSpeed = 0.8;
				controls.enableZoom = false;
				controls.target.set(0, 0, 0 );
				controls.update();			



				//A loader for loading all images from array.
				var loader = new THREE.TextureLoader();
				loader.crossOrigin = 'anonymous';


				//Preload
				objTotal = sources.length;
			
				sources.forEach( function( element, index ) {
					
				
					if ( element.type == 'img' ) {
						
						
						loader.load(
							// resource URL
							element.url,

							// onLoad callback
							function ( texture ) {
								
								loadSource( texture, index, offsetWidth, offsetHeight, objTotal, $( '#' + renderLoaderID ) );

							},

							// onProgress callback currently not supported
							undefined,

							// onError callback
							function ( err ) {
								console.error( 'An error happened.' );
							}
						);	
						
						
						
					} else {
						
					
						var texture = new THREE.VideoTexture( document.getElementById( element.id ) );
						texture.minFilter = THREE.LinearFilter;
						texture.magFilter = THREE.LinearFilter;
						texture.format = THREE.RGBFormat;

						// pause the video
						texture.image.autoplay = true;
						texture.image.loop = true;
						texture.image.currentTime = 0;
						texture.image.muted = true;
						texture.image.play();	

						
						
						loadSource( texture, index, offsetWidth, offsetHeight, objTotal, $( '#' + renderLoaderID ) );
					}
					
				});
		

				// Fires when the window changes
				window.addEventListener( 'resize', onWindowResize, false );


			}





			function render() {
				requestAnimationFrame( render );

				var t = clock.getElapsedTime();


				//To set a background color.
				//renderer.setClearColor( 0x000000 );	



				//Display the destination object
				if ( typeof allSources[activeSlider] != typeof undefined ) {

					var objects = allSources[activeSlider].children;
					var speed =  Math.random() * .0002;

					for ( var i = 0; i < objects.length; i++ ) {


						for ( var j = 0; j < objects[i].parent.children.length; j++ ) {
							var obj = objects[i].parent.children[j];

							obj.position.x += (obj.origPos.x - obj.position.x) * speed;
							obj.position.y += (obj.origPos.y - obj.position.y) * speed;
							obj.position.z += (obj.origPos.z - obj.position.z) * speed;

							
						}	

					}	
					

				}	
				
				
				//Hide inactive objects
				allSources.forEach( function ( element, index ) {
					if ( index != activeSlider ) {

						var objects = element.children;
						var speed =  Math.random() * .00005;

						for ( var i = 0; i < objects.length; i++ ) {


							for ( var j = 0; j < objects[i].parent.children.length; j++ ) {
								var obj = objects[i].parent.children[j];
								
								obj.position.x += (obj.targetPos.x - obj.position.x) * speed;
								obj.position.y += (obj.targetPos.y - obj.position.y) * speed;
								obj.position.z += (obj.targetPos.z - obj.position.z) * speed;

							}	

						}		
					}

				});
	

			
				//check all images loaded
				if ( typeof allSources != typeof undefined ) {
					if ( !objLoaded && allSources.length === objTotal ) {
						
						allSources.forEach( function ( element, index ) {
							scene.add( element );
							console.log( element );
						});
						objLoaded = true;


					}	

				}


				//update camera and controls
				controls.update();

				renderer.render( scene, camera );


			}


			function onWindowResize() {
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
			}

			

			/*
			 * Load Source
			 *
			 * @param  {Object} texture         - Returns a new texture object which can directly be used for material creation.
			 * @param  {Number} index           - Index of image or video.
			 * @param  {Number} w               - The width of an image or video, in pixels. 
			 * @param  {Number} h               - The height of an image or video, in pixels. 
			 * @param  {Number} total           - Total number of preload images or video.
			 * @param  {Object} loading         - Progress bar display control.
			 * @return {Void}
			 */
			function loadSource( texture, index, w, h, total, loading ) {

				var imgW = w,
					imgH = h;
				
				
				//
				var group = new THREE.Object3D();
				var i, j, ux, uy, ox, oy,
					geometry,
					xsize, ysize;
				ux = 1 / xgrid;
				uy = 1 / ygrid;
				xsize = imgW / xgrid;
				ysize = imgH / ygrid;
				cube_count = 0;
				for ( i = 0; i < xgrid; i ++ ) {
					for ( j = 0; j < ygrid; j ++ ) {
						ox = i;
						oy = j;
						geometry = new THREE.BoxBufferGeometry( xsize, ysize, xsize );
						changeUVS( geometry, ux, uy, ox, oy );
						materials[ cube_count ] = new THREE.MeshBasicMaterial( {
							map: texture
						 } );
						material = materials[ cube_count ];
						displacementSprite = new THREE.Mesh( geometry, material );
						displacementSprite.position.x = ( i - xgrid / 2 ) * xsize;
						displacementSprite.position.y = ( j - ygrid / 2 ) * ysize;
						displacementSprite.position.z = 0;
						displacementSprite.scale.x = displacementSprite.scale.y = displacementSprite.scale.z = 1;
						displacementSprite.origPos	= {
							x: displacementSprite.position.x,
							y: displacementSprite.position.y,
							z: displacementSprite.position.z
						};

						
						//hide all
						var newPosX = 4000 * Math.random() * ( Math.random() > 0.5 ? 1 : -1 );
						var newPosY = 2000 * Math.random();
						var newPosZ = 3000 * Math.random();
						displacementSprite.position.x = newPosX;
						displacementSprite.position.y = newPosY;
						displacementSprite.position.z = newPosZ;
						
						displacementSprite.targetPos	= {
							x: newPosX,
							y: newPosY,
							z: newPosZ
						};	
						
						//
						group.add( displacementSprite );
						
					
						
						//
						meshes[ cube_count ] = displacementSprite;
						cube_count += 1;
					}			
				}
				

				allSources.push( group );


				//loading
				TweenMax.to( loading, 0.5, {
					width    : Math.round(100 * allSources.length / total ) + '%',
					onComplete : function() {

						if ( $( this.target ).width() >= windowWidth - 50 ) {

							TweenMax.to( this.target, 0.5, {
								alpha: 0
							});	
						}

					}
				});
					

			}


			function changeUVS( geometry, unitx, unity, offsetx, offsety ) {
				var uvs = geometry.attributes.uv.array;
				for ( var i = 0; i < uvs.length; i += 2 ) {
					uvs[ i ] = ( uvs[ i ] + offsetx ) * unitx;
					uvs[ i + 1 ] = ( uvs[ i + 1 ] + offsety ) * unity;
				}
			}	
			
			
			
	

			
		 /*
		 * Trigger slider autoplay
		 *
		 * @param  {Function} playTimes      - Number of times.
		 * @param  {Number} timing           - Autoplay interval.
		 * @param  {Boolean} loop            - Determine whether to loop through each item.
		 * @param  {Object} slider           - Selector of the slider .
		 * @return {Void}                    - The constructor.
		 */
		function sliderAutoPlay( playTimes, timing, loop, slider ) {	

			var items = slider.find( '.uix-3d-slider--expParticle__item' ),
				total = items.length;
			
			slider[0].animatedSlides = setInterval( function() {

					playTimes = parseFloat( items.filter( '.active' ).index() );
					playTimes++;

					
					if ( !loop ) {
						if ( playTimes < total && playTimes >= 0 ) {
							
							var slideCurId  = items.filter( '.active' ).index(),
								slideNextId = playTimes;	

							sliderUpdates( slideCurId, slideNextId, 'next' );
						}
					} else {
						if ( playTimes == total ) playTimes = 0;
						if ( playTimes < 0 ) playTimes = total-1;		

						var slideCurId  = items.filter( '.active' ).index(),
							slideNextId = playTimes;	

						
						//Prevent problems with styles when switching in positive order
						if ( playTimes == 0 ) {
							sliderUpdates( slideCurId, slideNextId, 'prev' );	
						} else {
							sliderUpdates( slideCurId, slideNextId, 'next' );
						}

					}



				}, timing );	
			}

			
			
			/*
			 *  Transition Between Slides
			 *
			 * @param  {Number} slideCurId             - Index of current slider.
			 * @param  {Number} slideNextId            - Index of next slider.
			 * @param  {String} dir                    - Switching direction indicator.	 
			 * @return {Void}
			 */
			function sliderUpdates( slideCurId, slideNextId, dir ) {


				var $items                   = $sliderWrapper.find( '.uix-3d-slider--expParticle__item' ),
					total                    = $items.length,
					dataCountTotal           = $sliderWrapper.data( 'count-total' ),
					dataCountCur             = $sliderWrapper.data( 'count-now' ),
					dataControlsPagination   = $sliderWrapper.data( 'controls-pagination' ),
					dataControlsArrows       = $sliderWrapper.data( 'controls-arrows' ),	
					dataLoop                 = $sliderWrapper.data( 'loop' );
	
			
				
				if ( typeof dataCountTotal === typeof undefined ) dataCountTotal = 'p.count em.count';
				if ( typeof dataCountCur === typeof undefined ) dataCountCur = 'p.count em.current';
				if ( typeof dataControlsPagination === typeof undefined ) dataControlsPagination = '.uix-3d-slider--expParticle__pagination';
				if ( typeof dataControlsArrows === typeof undefined ) dataControlsArrows = '.uix-3d-slider--expParticle__arrows';
				if ( typeof dataLoop === typeof undefined ) dataLoop = false;			

				//Prevent bubbling
				if ( total == 1 ) {
					$( dataControlsPagination ).hide();
					$( dataControlsArrows ).hide();
					return false;
				}

				if ( ! isAnimating ) {
					isAnimating = true;
					
					
					//Transition Interception
					//-------------------------------------
					if ( dataLoop ) {
						if ( slideCurId > total - 1 ) slideCurId = 0;
						if ( slideCurId < 0 ) slideCurId = total-1;	

						//--
						if ( slideNextId < 0 ) slideNextId = total-1;
						if ( slideNextId > total - 1 ) slideNextId = 0;
					} else {

						if ( slideCurId > total - 1 ) slideCurId = total-1;
						if ( slideCurId < 0 ) slideCurId = 0;	

						//--
						if ( slideNextId < 0 ) slideNextId = 0;
						if ( slideNextId > total - 1 ) slideNextId = total-1;

					}



					//Get previous and next index of item
					//-------------------------------------
					var $current = $sliderWrapper.find( '.uix-3d-slider--expParticle__item' ).eq( slideCurId );
					var	$next    = $sliderWrapper.find( '.uix-3d-slider--expParticle__item' ).eq( slideNextId );



					console.log( 'Current: ' + slideCurId + ' | Next: ' + slideNextId );


					//Determine the direction and add class to switching direction indicator.
					//-------------------------------------
					var dirIndicatorClass = '';
					if ( dir == 'prev' ) dirIndicatorClass = 'prev';
					if ( dir == 'next' ) dirIndicatorClass = 'next';


					//Add transition class to each item
					//-------------------------------------	
					$items.removeClass( 'active leave prev next' )
						  .addClass( dirIndicatorClass );

					$current.addClass( 'leave' );
					$next.addClass( 'active' );



					//Add transition class to Controls Pagination
					//-------------------------------------
					$( dataControlsPagination ).find( 'ul > li' ).removeClass( 'active leave prev next' )
											   .addClass( dirIndicatorClass );

					$( dataControlsPagination ).find( 'ul > li' ).eq( slideCurId ).addClass( 'leave' );
					$( dataControlsPagination ).find( 'ul > li' ).eq( slideNextId ).addClass( 'active' );



					//Add transition class to Arrows
					//-------------------------------------		
					if ( ! dataLoop ) {
						$( dataControlsArrows ).find( 'a' ).removeClass( 'disabled' );
						if ( slideNextId == total - 1 ) $( dataControlsArrows ).find( '.uix-3d-slider--expParticle__arrows--next' ).addClass( 'disabled' );
						if ( slideNextId == 0 ) $( dataControlsArrows ).find( '.uix-3d-slider--expParticle__arrows--prev' ).addClass( 'disabled' );
					}




					//Display counter
					//-------------------------------------
					$( dataCountTotal ).text( total );
					$( dataCountCur ).text( parseFloat( slideCurId ) + 1 );		





					//Fire the next object
					//-------------------------------------
					activeSlider = slideNextId;
				

					//Fire the current object
					//-------------------------------------
				

					//Reset the trigger
					//-------------------------------------
					isAnimating = false;			
					
					
				}// end isAnimating
				
				

			}

			
			


			// 
			//-------------------------------------	
			return {
				init              : init,
				wrapperInit       : wrapperInit,
				render            : render,
				getScene          : function () { return scene; },
				getCamera         : function () { return camera; } 
			};


		}();

		MainStage.wrapperInit();
		MainStage.init();
		MainStage.render();
		
		
		
    } );
    
    
} ) ( jQuery );