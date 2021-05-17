<?php
declare(strict_types=1);

namespace Xearts\Symfony\UX\Ckeditor5\Tests\Kernel;

use Symfony\Component\Config\Loader\LoaderInterface;
use Symfony\Component\HttpKernel\Kernel;
use Xearts\Symfony\UX\Ckeditor5\XeartsCkeditor5Bundle;

class EmptyAppKernel extends Kernel
{
    use AppKernelTrait;

    public function registerBundles()
    {
        return [new XeartsCkeditor5Bundle()];
    }

    public function registerContainerConfiguration(LoaderInterface $loader)
    {
    }
}
