### Default ActionMenu

```js
import {
  ActionMenu,
  ActionMenuDivider,
  ActionMenuItem
} from 'suomifi-ui-components';
import { IconRemove, IconReply } from 'suomifi-icons';
import { useState } from 'react';

const [lastAction, setLastAction] = useState('');

<>
  <div>
    <ActionMenu
      buttonText="Actions"
      onOpen={() => console.log('open')}
      onClose={() => console.log('close')}
      disabled={false}
      id="my-id"
    >
      <ActionMenuItem onClick={() => setLastAction('Copy')}>
        Copy
      </ActionMenuItem>
      <ActionMenuDivider />
      <ActionMenuItem onClick={() => setLastAction('Long')}>
        Longer name for an action
      </ActionMenuItem>
      <ActionMenuItem
        onClick={() => setLastAction('Remove')}
        icon={<IconRemove />}
      >
        Remove
      </ActionMenuItem>
      <ActionMenuItem
        onClick={() => setLastAction('Disabled')}
        icon={<IconReply />}
        disabled
      >
        Disabled
      </ActionMenuItem>
    </ActionMenu>
  </div>
  <div>Last action: {lastAction}</div>
</>;
```

### ActionMenu with icon only

```js
import {
  ActionMenu,
  ActionMenuDivider,
  ActionMenuItem
} from 'suomifi-ui-components';
import { IconEdit, IconRemove } from 'suomifi-icons';
import { useState } from 'react';

const [lastAction, setLastAction] = useState('');

<>
  <div>
    <ActionMenu
      disabled={false}
      id="icon-only-id"
      aria-label="Actions"
      buttonVariant="secondaryNoBorder"
    >
      <ActionMenuItem onClick={() => setLastAction('Copy')}>
        Copy
      </ActionMenuItem>
      <ActionMenuItem
        onClick={() => setLastAction('Edit')}
        icon="edit"
        icon={<IconEdit />}
      >
        Edit
      </ActionMenuItem>
      <ActionMenuItem
        onClick={() => setLastAction('Remove')}
        icon={<IconRemove />}
      >
        Remove
      </ActionMenuItem>
    </ActionMenu>
  </div>
  <div>Last action: {lastAction}</div>
</>;
```

### Full width

```js
import {
  ActionMenu,
  ActionMenuDivider,
  ActionMenuItem
} from 'suomifi-ui-components';
import { IconEdit, IconRemove } from 'suomifi-icons';
import { useState } from 'react';

const [lastAction, setLastAction] = useState('');

<>
  <ActionMenu buttonText="Actions" id="full-id" fullWidth>
    <ActionMenuItem onClick={() => setLastAction('Copy')}>
      Copy
    </ActionMenuItem>
    <ActionMenuItem
      onClick={() => setLastAction('Edit')}
      icon={<IconEdit />}
    >
      Edit
    </ActionMenuItem>
    <ActionMenuItem onClick={() => setLastAction('Move')}>
      Move
    </ActionMenuItem>
    <ActionMenuDivider />
    <ActionMenuItem onClick={() => setLastAction('Long')}>
      Longer name for an action
    </ActionMenuItem>
    <ActionMenuItem onClick={() => setLastAction('Long')}>
      Another long name for an action
    </ActionMenuItem>
    <ActionMenuItem
      onClick={() => setLastAction('Remove')}
      icon={<IconRemove />}
    >
      Remove
    </ActionMenuItem>
    <ActionMenuItem
      disabled
      onClick={() => setLastAction('Disabled')}
    >
      Disabled
    </ActionMenuItem>
  </ActionMenu>

  <div>Last action: {lastAction}</div>
</>;
```