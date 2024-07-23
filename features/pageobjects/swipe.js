const {$,driver} = require('@wdio/globals');

const swipe = '//XCUIElementTypeOther[@name="Swipe"]';
const pageHeader = '//XCUIElementTypeStaticText[@name="Swipe horizontal"]'
const carousel = '//XCUIElementTypeOther[@name="Carousel"]';


class Swipe{

    async goToSwipePage(){
        while(!(await $(pageHeader).isDisplayed())){
            await $(swipe).click();
        }
        await $(pageHeader).waitForExist({timeout:6000});
        return(await $(pageHeader).isDisplayed());

    }

    async swipeLeft(){
        const size = await $(carousel).getSize();
        const location = await $(carousel).getLocation();

        const startX = location.x + size.width * 0.9; // Start near the right edge
        const startY = location.y + size.height / 2; // Start vertically centered
        const endX = location.x + size.width * 0.1; // End near the left edge
        const endY = startY; // End vertically centered

        
        await browser.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: startX, y: startY },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 500 },
                { type: 'pointerMove', duration: 500, origin: 'pointer', x: endX - startX, y: endY - startY },
                { type: 'pointerUp', button: 0 }
            ]
        }]);
    
        await browser.releaseActions();
    }

    async swipeToEndOfCarousel() {
        let reachedEnd = false;
        let maxSwipes = 6; // carousel length
        while (!reachedEnd && maxSwipes > 0) {
            try {
                await this.swipeLeft();
    
                const lastItem = await $('//XCUIElementTypeOther[@name="card" and @label="尿 COMPATIBLE WebdriverIO works in combination with most of the TDD and BDD test frameworks in the JavaScript world"]');
                if (await lastItem.isDisplayed()) {
                    reachedEnd = true;
                }
            } catch (error) {
                console.error('Error during swipe:', error);
            }
    
            maxSwipes--;
        }

        if (!reachedEnd) {
            console.log('Reached the maximum number of swipes without finding the end of the carousel.');
        }
    }
}

module.exports = new Swipe();