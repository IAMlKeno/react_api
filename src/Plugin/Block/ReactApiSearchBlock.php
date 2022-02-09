<?php

namespace Drupal\react_api_example\Plugin\Block;

use Drupal\Core\Block\BlockBase;

class ReactApiSearchBlock extends BlockBase {

  public function build()
  {
    $build['content'] = [
      '#markup' => '<div id="react-api-app"></div>',
      '#attached' => [
        'library' => 'react_api_example/react_api_example',
      ],
    ];

    return $build;
  }
}