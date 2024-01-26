import { getUUID } from "../../src/pluggins"


describe('pluggins/get-id.pluggins.ts', () => {

    it('getUUID should return a UUID', () => {
        const uuid = getUUID();

        expect(typeof uuid).toBe('string');
        expect(uuid.length).toBe(36);
    })
})