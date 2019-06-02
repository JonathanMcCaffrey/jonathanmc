import * as React from 'react';
import docsHierarchy from '../data/page_order.yml';
import {
  renderImage,
  renderBackgroundImage,
  renderMarkdown,
  renderImageWithCustomStype
} from '../utils';
import styles from '../styles/_global.module.scss';

interface PageProps {
  data: any;
}

export default class FrontPage extends React.Component<PageProps, {}> {
  public pageContent() {
    return (() => {
      const orderedPage: any = [];

      docsHierarchy.items.map((node: any) => {
        orderedPage.push(
          renderImage(
            node.coverBlur,
            this.props.data,
            'i1_' + orderedPage.length
          )
        );
        orderedPage.push(
          renderBackgroundImage(
            node.cover,
            this.props.data,
            'i2_' + orderedPage.length
          )
        );
        orderedPage.push(
          renderImage(
            node.coverBlur,
            this.props.data,
            'i3_' + orderedPage.length
          )
        );

        if (node.title === 'About') {
          orderedPage.push(
            renderImageWithCustomStype(
              'face.jpg',
              this.props.data,
              '',
              styles.Jonathan
            )
          );
        }

        orderedPage.push(
          renderMarkdown(
            node.title,
            this.props.data,
            'i4_' + orderedPage.length
          )
        );
      });

      return orderedPage;
    })();
  }

  public render() {
    return <div>{this.pageContent()}</div>;
  }
}
