/** CSci-4611 Example Code
 * Copyright 2023+ Regents of the University of Minnesota
 * Please do not distribute beyond the CSci-4611 course
 */

import * as gfx from 'gophergfx'


export class ExampleApp extends gfx.GfxApp
{   

	bgColor = new gfx.Color(0, 0, 0);
    // --- Create the ExampleApp class ---
    constructor()
    {
        // initialize the base class gfx.GfxApp
        super();
    }


    // --- Initialize the graphics scene ---
    createScene(): void 
    {
		this.renderer.background = gfx.Color.BLUE;

		const lEye = gfx.Geometry2Factory.createRect(.2, .2);
		lEye.position.x -= .5;
		lEye.position.y += .5

		const rEye = gfx.Geometry2Factory.createRect(.2, .2);
		rEye.position.x += .5;
		rEye.position.y += .5;

		const nose = gfx.Geometry2Factory.createCircle(.1);

		const mouth = gfx.Geometry2Factory.createRect(2, .2);
		mouth.position.y -= .5;

		this.scene.add(lEye);
		this.scene.add(rEye);
		this.scene.add(nose);
		this.scene.add(mouth);
    }


    // --- Update is called once each frame by the main graphics loop ---
    update(deltaTime: number): void 
    {
    }
}
