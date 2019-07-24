import { HelloWorldPresenter, HelloWorldStore } from '../hello-world-presenter';
import { DynamicComponent } from '../dynamic-chunk';

describe('HelloWorldPresenter', () => {
  const presenter = new HelloWorldPresenter();

  it('set the component', async () => {
    const store: HelloWorldStore = { BottomComponent: undefined };
    await presenter.loadComponent(store);
    expect(store.BottomComponent).toBe(DynamicComponent);
  });
});
