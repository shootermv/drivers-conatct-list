import { getContactById } from "./selectors";


describe('Selectors', () => {
    describe('contact selector', () => {
      it('should fetch contact by id', () => {
        let mockParameters = {
          contact: {
            contacts: [{id: 1, name: "Josef"}]
          },
        };
        const selected = getContactById(mockParameters, 1);
        expect(selected.name).toEqual('Josef');
      });
    });
 });