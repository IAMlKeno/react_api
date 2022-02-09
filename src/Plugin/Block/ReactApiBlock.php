<?php

namespace Drupal\react_api_example\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides an example block.
 *
 * @Block(
 *   id = "react_api_example",
 *   admin_label = @Translation("React API Example"),
 *   category = @Translation("React")
 * )
 */
class ReactApiBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build['content'] = [
      '#markup' => '<div id="react-api-app"></div>',
      '#attached' => [
        'library' => 'react_api_example/react_api_example',
      ],
    ];
    return $build;
  }

}
