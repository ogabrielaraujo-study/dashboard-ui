import React from 'react';
import './style.scss';

import Grid from '../Grid';
import Card from '../Card';
import Title from '../Title';
import Text from '../Text';

export default function Main() {
	return (
		<main>
			<Grid cols="1" rows="1">
				<Title>Hello World</Title>

        <Card>
          <Title>Card with Title</Title>

          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sollicitudin hendrerit purus sit amet suscipit.
            Nunc orci lorem, pretium quis commodo eu, commodo mattis massa. In tristique sed nulla eu vestibulum.
            Sed tincidunt tellus arcu, in pellentesque magna aliquet nec. Nunc dapibus cursus mi a cursus.
            Duis vulputate eu lacus a efficitur. Aenean sodales fringilla urna, in interdum sem tincidunt a.
          </Text>

          <Text>
            Nam hendrerit justo porttitor, semper est et, ullamcorper neque. Aliquam mollis lorem ac orci ultrices varius.
            Nam at velit vitae nibh porta vulputate a a leo. Mauris nisi lacus, tempus eget nisi vitae, molestie blandit justo.
            Cras justo nisi, finibus vitae venenatis ut, malesuada a diam. Integer in vestibulum nisi. Quisque fringilla, magna sit
            amet rhoncus hendrerit, felis massa rutrum justo, vulputate pretium urna diam at metus. Donec vel nulla in arcu sodales efficitur.
            Nunc egestas massa nisl, at fringilla massa malesuada dignissim. Suspendisse convallis tempor nunc,
            eu iaculis lorem imperdiet at. Aenean vehicula dictum tempus.
          </Text>

          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sollicitudin hendrerit purus sit amet suscipit.
            Nunc orci lorem, pretium quis commodo eu, commodo mattis massa. In tristique sed nulla eu vestibulum.
            Sed tincidunt tellus arcu, in pellentesque magna aliquet nec. Nunc dapibus cursus mi a cursus.
            Duis vulputate eu lacus a efficitur. Aenean sodales fringilla urna, in interdum sem tincidunt a.
          </Text>
        </Card>
			</Grid>
		</main>
	);
}
