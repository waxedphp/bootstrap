<?php
namespace Waxedphp\Bootstrap;

use \Waxedphp\Waxedphp\Setters\AbstractSetter;

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
  public function value(mixed $value): array {
    $a = $this->getArrayOfAllowedOptions();
    return $a;
  }

}
