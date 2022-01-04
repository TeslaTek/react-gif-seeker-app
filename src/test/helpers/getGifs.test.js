import { getGifs } from "../../helpers/GetGifs"

describe('testing helper getGifs', () => {

    test('should get 10 elements', async() => {
            const gifs = await getGifs('Steven Seagal');
            expect(gifs.length).toBe(10);
    })

    test('should be empty if the category is empty too', async() => {

        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
        
    })
    
    
    
})
