import { HelloWorldPresenter, HelloWorldStore } from '../hello-world-presenter';
import { DynamicComponent } from '../dynamic-chunk';

describe('HelloWorldPresenter', () => {
  it('set the component', async () => {
    const store: HelloWorldStore = { BottomComponent: undefined };
    await HelloWorldPresenter.loadComponent(store);
    expect(store.BottomComponent).toBe(DynamicComponent);
  });
});
