
    import {
      loadGLTF,
      loadTexture,
      loadTextures,
      loadVideo,
    } from "https://cdn.jsdelivr.net/gh/Dwar-liberin/dwar-lib/libs/loader.js";

    import { createChromaMaterial } from "https://cdn.jsdelivr.net/gh/Dwar-liberin/dwar-lib/libs/chroma-video.js" 
    import TWEEN from "https://cdn.jsdelivr.net/npm/@tweenjs/tween.js@18.6.4/dist/tween.esm.js";
      let analytics=null
  const animationManager = new AnimationManager();

      const isIOS = navigator.appVersion.indexOf("Mac") != -1 ? true : false;
      try {

        analytics = new Analytics(
          {
              appName: "DwAR",
              customerId: "4",
              campaignName: "wedding card",
              serverUrl: "https://lttl.in/event"
          }
       );

      Analytics.active = true;

      } catch(e) {
        console.log("Err", e.message)
      }
      
  

    const THREE = window.MINDAR.IMAGE.THREE;

    
    async function loadUnmuteLogo() {
      const muteIconGeo = new THREE.CircleGeometry(0.5, 32);
      const muteIconTexture = await loadTexture("assets/mute.png");
      const muteIconMaterial = new THREE.MeshBasicMaterial({
        map: muteIconTexture,
      });
    
      const muteIconMesh = new THREE.Mesh(muteIconGeo, muteIconMaterial);
      muteIconMesh.scale.set(0.1, 0.1);
      muteIconMesh.position.set(0, -0.5, 0.3);
    
      muteIconMesh.userData.clickable = true;
    
      return muteIconMesh;
    }

    

    
 function executeAnimation(animation, mesh) {
  console.log('animation', animation)
  const { name, state, value, duration, delay } = animation;

  switch (name) {
    case "slide":
      if (state === "left") {
        animationManager.animateSlide(mesh, null, duration, null, value, delay);
      }
      else if (state === "right") {
        animationManager.animateSlide(mesh, null, duration, value, state, delay);
      } else if (state === "up") {
        animationManager.animateSlideUp(mesh, duration, value, delay);
      } else {
        animationManager.animateSlideDown(mesh, duration, value, delay);

      }
      break;
    case "fade":
      if (state == "in") {
        animationManager.animateFadeIn(mesh, duration, delay);
      } else {
        animationManager.animateFadeOut(mesh, duration, delay);
      }
      break;
    case "scale":
      if (state == "up") animationManager.animateScaleUp(mesh, value, duration, null, delay);
      else animationManager.animateScaleDown(mesh, value, duration, null, delay);
      break;
    case "bounce":
      animationManager.animateBounce(mesh, "z", value, duration, delay); // Assuming "z" axis for bounce
      break;
    default:
      console.error("Unknown animation");
      break;
  }
}
    

    document.addEventListener("DOMContentLoaded", () => {

    // DwAR Analytics
    try {
      console.log("ana", analytics)
      if(analytics){
        console.log("ana", analytics)
        analytics.trackPageLoad({
          eventType: 'load',
          payload: true,
        });
  
        analytics.sendQueryParam()
      }
     
    } catch(e) {
      console.log("e", e.message)
    }


    async function start(){

      let muteIconMesh;
      
      
 
  const mindThree =  new window.MINDAR.IMAGE.MindARThree({
    container: document.body,
    imageTargetSrc: "assets/target.mind",
    uiLoading: "#scanning-overlay",
  });

  const { renderer, scene, camera } = mindThree;
  const anchor = mindThree.addAnchor(0);

  const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
  scene.add(light);

  const loadFont = (fontURL) => {
    return new Promise((resolve, reject) => {
      const loader = new THREE.FontLoader();

      loader.load(
        fontURL,
        (font) => {
          resolve(font); // Resolve the promise with the loaded font
        },
        undefined, // Progress callback (optional)
        (error) => {
          reject(error); // Reject the promise with the error
        }
      );
    });
  };

  
    
      const target_imageweddin6f2fc_iconGeometry = new THREE.PlaneGeometry(1, 0.5625);
   const target_imageweddin6f2fc_texture = await loadTexture("assets/wedding meet our families marker (1).png");
  const target_imageweddin6f2fc_image = new THREE.MeshBasicMaterial({
      map: target_imageweddin6f2fc_texture,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const target_imageweddin6f2fc = new THREE.Mesh(target_imageweddin6f2fc_iconGeometry, target_imageweddin6f2fc_image);
    target_imageweddin6f2fc.scale.set(1, 1, 1);
    target_imageweddin6f2fc.position.set(0.01, -0.01, 0.01);
    target_imageweddin6f2fc.rotation.set(-0.001, 0, 0);
    
    
    

    const video_asset_34ad0420a35_planeGeometry = new THREE.PlaneGeometry(1, 0.5625);

    const video_asset_34ad0420a35_Item0Video = await loadVideo("assets/sample wedding intro video.mp4");

    const video_asset_34ad0420a35_Item0VideoTexture = new THREE.VideoTexture(
      video_asset_34ad0420a35_Item0Video
    );

    let video_asset_34ad0420a35_Item0VideoMaterial

      video_asset_34ad0420a35_Item0VideoMaterial = new THREE.MeshBasicMaterial({
          map: video_asset_34ad0420a35_Item0VideoTexture,
          transparent:true
        })
    
     const video_asset_34ad0420a35 = new THREE.Mesh(
      video_asset_34ad0420a35_planeGeometry,
      video_asset_34ad0420a35_Item0VideoMaterial
    );

  video_asset_34ad0420a35.position.set(0.01, -0.01, 0);



  if (isIOS) {
    video_asset_34ad0420a35_Item0Video.muted=isIOS
    muteIconMesh = await loadUnmuteLogo();
    anchor.group.add(muteIconMesh);
  }

  video_asset_34ad0420a35_Item0Video.loop=true;
  
  video_asset_34ad0420a35.scale.set(1, 1, 1);

    video_asset_34ad0420a35.rotation.set(-0.001, 0, 0);

    
  
const logo_e5dc5091_8eb8e5dc5_iconGeometry = new THREE.CircleGeometry(0.5,32);
   const logo_e5dc5091_8eb8e5dc5_texture = await loadTexture("assets/circle-wa-sm_113.png");
  const logo_e5dc5091_8eb8e5dc5_image = new THREE.MeshBasicMaterial({
      map: logo_e5dc5091_8eb8e5dc5_texture,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const logo_e5dc5091_8eb8e5dc5 = new THREE.Mesh(logo_e5dc5091_8eb8e5dc5_iconGeometry, logo_e5dc5091_8eb8e5dc5_image);
    logo_e5dc5091_8eb8e5dc5.scale.set(0.2, 0.2, 0.2);
    logo_e5dc5091_8eb8e5dc5.position.set(-0.005, -0.45, 0);
    logo_e5dc5091_8eb8e5dc5.rotation.set(-0.001, 0, 0);
    logo_e5dc5091_8eb8e5dc5.userData.clickable = true
    
    logo_e5dc5091_8eb8e5dc5.userData.eventName ="Whatsapp"
const logo_567b39a9_b70b567b3_iconGeometry = new THREE.CircleGeometry(0.5,32);
   const logo_567b39a9_b70b567b3_texture = await loadTexture("assets/circle-call-sm_118.png");
  const logo_567b39a9_b70b567b3_image = new THREE.MeshBasicMaterial({
      map: logo_567b39a9_b70b567b3_texture,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const logo_567b39a9_b70b567b3 = new THREE.Mesh(logo_567b39a9_b70b567b3_iconGeometry, logo_567b39a9_b70b567b3_image);
    logo_567b39a9_b70b567b3.scale.set(0.2, 0.2, 0.2);
    logo_567b39a9_b70b567b3.position.set(0.405, -0.45, 0);
    logo_567b39a9_b70b567b3.rotation.set(-0.001, 0, 0);
    logo_567b39a9_b70b567b3.userData.clickable = true
    
    logo_567b39a9_b70b567b3.userData.eventName ="Phone"
const image_ed935d97_fb3fb3ad_iconGeometry = new THREE.PlaneGeometry(1, 0.99);
   const image_ed935d97_fb3fb3ad_texture = await loadTexture("assets/instagram-logo.png");
  const image_ed935d97_fb3fb3ad_image = new THREE.MeshBasicMaterial({
      map: image_ed935d97_fb3fb3ad_texture,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const image_ed935d97_fb3fb3ad = new THREE.Mesh(image_ed935d97_fb3fb3ad_iconGeometry, image_ed935d97_fb3fb3ad_image);
    image_ed935d97_fb3fb3ad.scale.set(0.2, 0.2, 0.2);
    image_ed935d97_fb3fb3ad.position.set(-0.38, -0.45, 0);
    image_ed935d97_fb3fb3ad.rotation.set(-0.001, 0, 0);
    image_ed935d97_fb3fb3ad.userData.clickable = true
    
    image_ed935d97_fb3fb3ad.userData.eventName ="https://www.instagram.com/arrkaheroidharhai?igsh=bDI1cXkzaW1hMnVm"
      
       document.body.addEventListener("click", (e) => {
    const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;

    const mouse = new THREE.Vector2(mouseX, mouseY);
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
      let o = intersects[0].object;

      while (o.parent && !o.userData?.clickable) {
        o = o.parent;
      }

      if(o.userData.clickable && analytics){
        
        try {
          analytics.trackClick({
            eventType: "click",
            payload: o.userData.eventName
          })
        } catch (err){
          console.log("Err", err)
        }
       
      }

        if(isIOS){ 
          if (o.userData.clickable && o === muteIconMesh) {
            video_asset_34ad0420a35_Item0Video.muted=false
    
            anchor.group.remove(muteIconMesh);
            return true;
          }
        }


      // if button is clickable then loading screen is show. And when user redirect to the screen loader automatically gone because script is change.
      
      if (o.userData.clickable) window.showLoadingScreen();

      
      if (o.userData.clickable && o === logo_e5dc5091_8eb8e5dc5) {
        setTimeout(()=>{
          window.location.href = "https://wa.me/9899075547?tex"
        },100)
        }
      

      if (o.userData.clickable && o === logo_567b39a9_b70b567b3) {
        setTimeout(()=>{
          window.location.href = "tel:9899075547"
        },100)
        }
      

      if (o.userData.clickable && o === image_ed935d97_fb3fb3ad) {
        setTimeout(()=>{
          window.location.href = "Instagram"
        },100)
        }
      
      }

    })
    
      
    
anchor.group.add(video_asset_34ad0420a35)
anchor.group.add(logo_e5dc5091_8eb8e5dc5)
anchor.group.add(logo_567b39a9_b70b567b3)
anchor.group.add(image_ed935d97_fb3fb3ad)


    anchor.onTargetFound = () => {
      try {
        if(analytics){
          analytics.trackMarkerScanned();
        }
      } catch(e) {
        console.log("Err", e)
      }

            





     
      video_asset_34ad0420a35_Item0Video.play();
    };


    anchor.onTargetLost = () => {
       video_asset_34ad0420a35_Item0Video.pause();

        




    }
    
    
      
    await mindThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
       TWEEN.update();
    });
    
    }
    start();
    })
    
    