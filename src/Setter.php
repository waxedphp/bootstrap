<?php
namespace Waxedphp\Bootstrap;

use \Waxedphp\Waxedphp\Php\Setters\AbstractSetter;

class Setter extends AbstractSetter {

  /**
  */
  protected ?string $reportSize = null;

  /**
   * allowed options
   *
   * @var array<mixed> $_allowedOptions
   */
  protected array $_allowedOptions = [
    'reportSize'
  ];

  /**
  * value
  *
  * @param mixed $value
  * @return array<mixed>
  */
  public function value(mixed $value = null): array {
    $a = $this->getArrayOfAllowedOptions();
    if (!is_null($value)) $a['value'] = $value;
    return $a;
  }

  public function page(int $count, int $limit, int $offset): array {
    $a = [
      'page' => [
        'count' => $count,
        'limit' => $limit,
        'offset' => $offset,
      ],
    ];
    return $a;
  }

  public function accordion(int $n): array {
    $a = [
      'show' => $n,
    ];
    return $a;
  }

}
