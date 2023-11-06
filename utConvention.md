Unit-tests convention

Presentational components will require **100%** coverage with unit tests.
Container components will not require 100%. We understand it might be hard to achieve and the benefit to effort ratio is not worth it. However, **~80%** is a must.
Project test coverage should be >80%.

Style guide:

1. Declare variables at the top on separated lines:

```javascript
describe('EntityName', () => {
    let sut;
    let props;
    let mockData;
    // ...
});
```

2. Add empty line between `describe`, `beforeEach`, `it`...

```javascript
describe('EntityName', () => {
    beforeEach(() => {});
    // empty line
    it('', () => {});
    // empty line
    it('', () => {});
});
```

3. Initialize variables in `beforeEach` in order to eliminate a possibility of mutation or changing variables in nested `describes` or `it`:

```javascript
describe('EntityName', () => {
    let sut;
    let props;
    let mockData;

    beforeEach(() => {
        props = {
            text: 'Text',
            onChange: jest.fn(),
        };
        mockData = {
            goTo: jest.fn(),
        };
    });
    // ...
});
```

4. Group variable declaration, setting Spies and rendering in several `beforeEach` blocks in order to keep it readable; Also possible to add a line break after each group in one `beforeEach`;

```javascript
describe('EntityName', () => {
  let sut;
  let props;
  let mockData;

  beforeEach(() => {
    props = {
      text: 'Text',
      onChange: jest.fn(),
    };
    mockData = {
      goTo: jest.fn(),
    };
  });

  beforeEach(() => {
    jest.spyOn(Obj, 'property').mockReturnValue(mockData);
    jest.spyOn(ObjTwo, 'propertyTwo').mockReturnValue(mockData);
  });

  beforeEach(() => {
    sut = mount(<Component {...} />);
  });
});

  // SECOND OPTION:

describe('EntityName', () => {
  let sut;
  let props;
  let mockData;
  let mockResponse;

  beforeEach(() => {
    props = {
      text: 'Text',
      onChange: jest.fn(),
    };
    mockData = {
      goTo: jest.fn(),
    };
    mockResponse = {
      code: 404
    };

    jest.spyOn(Obj, 'property').mockReturnValue(mockData);
    jest.spyOn(ObjTwo, 'get').mockResolvedValue(mockResponse);

    sut = mount(<Component {...} />);
  });
});
```

5. Keep `it` block readable. If `describe` contains several `it` - `beforeEach` is a must for shared values! You can move rendering and setting spies in `beforeEach` even if describe contains one `it` if it makes a case more readable.

```javascript
// POSSIBLE OPTION
describe('EntityName', () => {
  describe('when SOME CONDITION', () => {
    it('should DO SOMETHING', () => {
      jest.spyOn(api, 'get').mockResolvedValue({ text: 'Text' });

      sut = render({ ...props, overrideProperty: 1 });

      sut.props().onSubmit();

      expect(mockUseDeliverOtpData.deliverByEmail).toHaveBeenCalled();
    });
  });
});

// WRONG
describe('EntityName', () => {
  describe('when SOME CONDITION', () => {
    it('should DO SOMETHING', () => {
      const mockData = {
        propOne: ''propOne,
      };
      const mockResponse = {
        propOne: ''propOne,
      };
      const mockUtils = {
        propOne: ''propOne,
      };
      jest.spyOn(service, 'getData').mockReturnedValue(mockData);
      jest.spyOn(api, 'get').mockResolvedValue(mockResponse);
      jest.spyOn(utils, 'get').mockResolvedValue({ text: 'Text' });
      sut = mount(
        <Context.Provide>
            <Component {...props, overrideProps: 1} />
        </Context.Provide>
      );
      sut.props().onSubmit();

      expect(api.get).toHaveBeenCalled();
    });
  });
});

// CAN BE REFACTORED TO:
describe('EntityName', () => {
  describe('when SOME CONDITION', () => {
    let mockData;
    let mockResponse;
    let mockUtils;

    beforeEach(() => {
      mockData = {
        propOne: ''propOne,
      };
      mockResponse = {
        propOne: ''propOne,
      };
      mockUtils = {
        propOne: ''propOne,
      };

      jest.spyOn(service, 'getData').mockReturnedValue(mockData);
      jest.spyOn(api, 'get').mockResolvedValue(mockResponse);
      jest.spyOn(utils, 'get').mockResolvedValue({ text: 'Text' });

      sut = render({...props, overrideProps: 1});
    });

    it('should DO SOMETHING', () => {
      sut.props().onSubmit();

      expect(api.get).toHaveBeenCalled();
    });
  });
});
```

6. Extract component rendering to function in order to not repeat multiple lines of code:

```javascript
  const render = (context, props) => mount(
    <Context.Provider value={context}>
      <ComponentToTest {...props} />
    </Context.Provider>,
  );

  describe('EntityName', () => {
    let sut;
    let context;
    let props;

    beforeEach(() => {
      context = {
        go: jest.fn(),
        back: jest.fn(),
      };
      props = {
        prop: 'one'
        do: jest.fn()
      };

      sut = render(context, props);
    });

    it('should ...', () => {
      // ...
    });

    // in case is overrides is needed in one test
    it('should ...', () => {
      sut = render(context, { ...props, override: 'some value' });
    });
  });
```

7. Group test cases in `describe` blocks to create clean hierarchy of cases. Nested `describe` description should start with `when`; `it` descriptions should start with `should`.

```javascript
describe('EntityName', () => {
    // ...

    describe('when has an error', () => {
        it('should do one thing', () => {
            //...
        });

        it('should do another thing', () => {
            //...
        });
    });

    describe('when has NO error', () => {
        describe('when type is EMAIL', () => {
            it('should do one thing', () => {
                //...
            });

            it('should do another thing', () => {
                //...
            });
        });

        describe('when type is SMS', () => {
            it('should do one thing', () => {
                //...
            });

            it('should do another thing', () => {
                //...
            });
        });
    });
});
```

8. Use lodash `noop` instead of arrow function in testing of Presentational components;

```javascript
describe('Form', () => {
    let sut;
    let props;

    beforeEach(() => {
        props = {
            handleSubmit: noop,
            errors: { email: 'test email' },
        };

        sut = render({ ...props, errors });
    });

    it('should match snapshot', () => {
        expect(sut).toMatchSnapshot();
    });
});
```

9. Do not initialize mock variables with empty strings, null or undefined in order to avoid false positive effects.

```javascript
describe('Form', () => {
    let sut;
    let props;

    beforeEach(() => {
        props = {
            handleSubmit: noop,
            // NOTE: email should be initialized with non empty string
            errors: { email: 'test email' },
        };

        sut = render({ ...props, errors });
    });
});
```

10. Test styled components with snapshots.

```javascript
// Form container is styled div.
describe(‘FormContainer’, () => {
  it(‘should match snapshot’, () => {
    expect(shallow(<FormContainer />)).toMatchSnapshot();
  });
});
```

11. Try to avoid snapshot testing on React components. Perform shallow render (when possible) and checking if certain elements exist or if their value is affected by passing configuration prop.

```javascript
// Form container is styled div.
describe(Header, () => {
  let sut;
  let props

  beforeEach(() => {
    props={ companyName: ‘LAFC’ };
    sut = render(props);
  });

  it(‘should match snapshot’, () => {
    const integratorName = sut.find(‘.integrator’);

    expect(integratorName).toBe(props.companyName);
  });
});
```

12. Jest manual mocks can be used in order to simplify mocking returned value for the shared hooks / services:

```javascript
// Manual mock can export function which can be used to mock returned value; In this example this is setMockData.
// separate file with the same filename as Real Entity Name in folder __mocks__
// example:  __mocks__/useDataApi.js
let data = {
    emailData: '',
    emailError: '',
    doSendEmail: jest.fn(),
    isEmailLoading: false,
};

export const setMockData = (newData) => {
    data = { ...newData, ...data };
};

export default jest.fn().mockImplementation(() => data);

// spec file some.spec.js
// importing setMockData
import useDataApi, { setMockData } from '../../../shared/hooks/useDataApi';

// mocking some entity which has a manual mock
jest.mock('../../../shared/hooks/useDataApi');

describe('EntityName', () => {
    let mockApiData;

    beforeEach(() => {
        mockApiData = {
            doSend: jest.fn(),
            data: 'data',
            error: 'error',
            isLoading: true,
        };

        // Setting mock data
        setMockData(mockApiData);
    });

    it('should send request', () => {
        const email = 'aaaaa@test.com';

        sut.props().onSubmit(email);

        expect(mockApiData.doSend).toHaveBeenCalledWith(email);
    });
});
```

Also it is not forbidden to use `spyOn` to achieve same thing:

```javascript
import useDataApi from '../../../shared/hooks/useDataApi';

jest.mock('../../../shared/hooks/useDataApi');

describe('EntityName', () => {
    let mockApiData;

    beforeEach(() => {
        mockApiData = {
            doSend: jest.fn(),
            data: 'data',
            error: 'error',
            isLoading: true,
        };

        jest.spyOn(useDataApi, 'default').mockImplementation(() => mockApiData);
    });

    it('should send request', () => {
        const email = 'aaaaa@test.com';

        sut.props().onSubmit(email);

        expect(mockApiData.doSend).toHaveBeenCalledWith(email);
    });
});
```

13. For checking function invocation use `toHaveBeenCalled` in case function was invoked without any arguments, or we do not care about them.
    In all other cases consider to use `toHaveBeenCalledWith()`. Don't use `toHaveBeenCalledWith()` without arguments. Also use `toHaveBeenCalledTimes()` to check the number of times a function is called.:

```javascript
import testedFunc from '../testedFunc';
import someFunc from '../someFunc';

jest.mock('../someFunc');

describe('testedFunc', () => {
    let spyConsole;
    let wrongArg;
    let correctArg;

    beforeEach(() => {
        wrongArg = 'wrongArg';
        correctArg = 'correctArg';
        spyConsole = jest.spyOn(console, 'error');
    });

    it('should invoke function someFunc', () => {
        testedFunc(correctArg);

        expect(someFunc).toHaveBeenCalled();
    });

    it('should puts error in console if testedFunc was invoked with wrong argument', () => {
        testedFunc(wrongArg);

        expect(spyConsole).toHaveBeenCalledWith('Error message');
    });
});
```

14. Use `jest.resetAllMocks()` and `jest.clearAllMocks()` in `afterEach()` block.

```javascript
describe(‘Form’, () => {
  let spy;

  beforeEach(() => {
    spy = jest.spyOn(console, ‘error’);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
```

15. Only one `expect` is allowed per `it`:

```javascript
import testedFunc from '../testedFunc';
import someFunc from '../someFunc';

jest.mock('../someFunc');

describe('testedFunc', () => {
    let spyConsole;
    let wrongArg;
    let correctArg;

    beforeEach(() => {
        wrongArg = 'wrongArg';
        correctArg = 'correctArg';
        spyConsole = jest.spyOn(console, 'error');
    });

    // THIS IS WRONG. DON’T DO IT.
    it('should invoke function someFunc and return false', () => {
        const result = testedFunc(correctArg);

        expect(someFunc).toHaveBeenCalled();
        expect(result).toBeFalsy();
    });
});
```
