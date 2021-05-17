<?php
declare(strict_types=1);

namespace Xearts\Symfony\UX\Ckeditor5\Tests;

use Symfony\Bundle\FrameworkBundle\Tests\TestCase;
use Symfony\Component\HttpKernel\Kernel;
use Xearts\Symfony\UX\Ckeditor5\Tests\Kernel\EmptyAppKernel;
use Xearts\Symfony\UX\Ckeditor5\Tests\Kernel\FrameworkAppKernel;
use Xearts\Symfony\UX\Ckeditor5\Tests\Kernel\TwigAppKernel;

class XeartsCkeditor5BundleTest extends TestCase
{
    public function provideKernels()
    {
        yield 'empty' => [new EmptyAppKernel('test', true)];
        yield 'framework' => [new FrameworkAppKernel('test', true)];
        yield 'twig' => [new TwigAppKernel('test', true)];
    }

    /**
     * @dataProvider provideKernels
     */
    public function testBootKernel(Kernel $kernel)
    {
        $kernel->boot();
        $this->assertArrayHasKey('XeartsCkeditor5Bundle', $kernel->getBundles());
    }
}
